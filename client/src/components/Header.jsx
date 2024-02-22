/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Nav from './Nav'
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
    <>
      <Nav currentUrl={currentUrl} currentUser={currentUser} />
    </>
  )
}

export default Header
