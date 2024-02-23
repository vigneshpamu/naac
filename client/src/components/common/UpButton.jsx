import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

const UpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  )
}

export default UpButton
