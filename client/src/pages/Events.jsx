import React from 'react'
import { IoMdSearch } from 'react-icons/io'
const Events = () => {
  return (
    <div className="mt-16 h-[100vh] w-[100vw] bg-slate-900">
      {/* Search Bar */}
      <div className="max-w-[1200px] text-white mx-auto py-5">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search Events"
            className="p-3 w-full rounded-md"
          />
          <IoMdSearch className="absolute right-4 top-2 text-red-500 text-3xl" />
        </div>

        {/* Filter & Events */}
        <div className="flex flex-row items-start justify-center">
          {/* Filter */}
          <div></div>
          {/* Events */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Events
