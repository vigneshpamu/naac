/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentUrl, setCurrentUrl] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString()
    navigate(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const currentUrl = location.pathname
    setCurrentUrl(currentUrl.substring(1))
  }, [location])

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get('searchTerm')
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={'/'}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Property</span>
            <span className="text-slate-700">&nbsp;Pal</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-32 sm:w-64	"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="text-slate-600 cursor-pointer" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          {currentUser ? (
            <Link to="/profile">
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser?.avatar}
                alt="profile"
              />
            </Link>
          ) : currentUrl === 'sign-in' ? (
            <Link to="/sign-up">
              <p className="text-slate-700 hover:underline">Sign up</p>
            </Link>
          ) : (
            <Link to="/sign-in">
              <p className="text-slate-700 hover:underline">Sign in</p>
            </Link>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
