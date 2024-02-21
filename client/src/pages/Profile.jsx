/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { useToast } from '@/components/ui/use-toast'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from '../redux/user/userSlice'
import { app } from '../firebase'
import { Link } from 'react-router-dom'

const Profile = () => {
  const fileRef = useRef(null)

  const { toast } = useToast()
  const { currentUser, loading, error } = useSelector((state) => state.user)
  const [file, setFile] = useState(undefined)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [filePec, setFilePec] = useState(0)
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const [showListingError, setShowListingError] = useState(false)
  const [userListings, setUserListings] = useState([])
  useEffect(() => {
    if (file) {
      handleFileUpload(file)
    }
  }, [file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setFilePec(Math.round(progress))
      },
      (error) => {
        setFileUploadError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL })
        })
      }
    )
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUserStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.success === false) {
        dispatch(updateUserFailure(data.message))
        return
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
      toast({
        title: 'User Updated Successfully',
        variant: 'success',
        // description: 'Friday, February 10, 2023 at 5:57 PM',
      })
    } catch (error) {
      dispatch(updateUserFailure(error.message))
    }
  }

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart())
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      })
      const data = await res.json()

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message))
        return
      }
      dispatch(deleteUserSuccess(data))
    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart())
      const res = await fetch(`/api/auth/signout`)
      const data = await res.json()
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message))
        return
      }
      dispatch(signOutUserSuccess(data))
    } catch (error) {
      dispatch(signOutUserFailure(error.message))
    }
  }

  const handleShowListing = async () => {
    try {
      setShowListingError(false)
      const res = await fetch(`/api/user/listings/${currentUser._id}`)
      const data = await res.json()
      if (data.success === false) {
        setShowListingError(true)
        return
      }
      setUserListings(data)
    } catch (error) {
      setShowListingError(true)
    }
  }

  const handleListingDelete = async (id) => {
    try {
      const res = await fetch(`/api/listing/delete/${id}`, {
        method: 'DELETE',
      })
      const data = await res.json()

      if (data.success === false) {
        console.log(data.message)
        return
      }
      setUserListings((prev) => prev.filter((listing) => listing._id !== id))
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
          src={formData?.avatar || currentUser.avatar}
          alt=""
        />
        <input
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
          className="border p-3 rounded-lg"
          onChange={handleChange}
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          defaultValue={currentUser.email}
          onChange={handleChange}
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
          id="password"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Loading' : 'Update'}
        </button>
        <Link
          to="/create-listing"
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
        >
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <span
          className="text-red-700 cursor-pointer"
          onClick={handleDeleteUser}
        >
          Delete account
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
      <p className="text-red-700 mt-5">{error ? error : ''}</p>
      <p className="text-green-700 mt-5">
        {/* {updateSuccess ? 'User is updated successfully!' : ''} */}
      </p>
      <button onClick={handleShowListing} className="text-green-700 w-full">
        Show Listing
      </button>
      <p className="text-red-700 mt-5">
        {showListingError ? 'Error Showing Listings' : ''}
      </p>

      {userListings && userListings.length > 0 && (
        <div className="flex flex-col gap-4">
          <h1 className="text-center mt-7 text-2xl font-semibold">
            Your Listings
          </h1>
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className="border rounded-lg p-3 flex justify-between items-center gap-4"
            >
              <Link to={`listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt=""
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <Link
                className="flex-1 text-slate-700 font-semibold hover:underline truncate"
                to={`/listing/${listing._id}`}
              >
                <p className="">{listing.name}</p>
              </Link>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleListingDelete(listing._id)}
                  className="text-red-700 uppercase"
                >
                  Delete
                </button>
                <Link to={`/update-listing/${listing._id}`}>
                  <button className="text-green-700 uppercase">Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Profile
