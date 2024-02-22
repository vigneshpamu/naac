import { events } from '@/data/eventsData'
import React, { useState } from 'react'
import { IoMdPeople, IoMdSearch } from 'react-icons/io'
import { Skeleton } from '@/components/ui/skeleton'
import { GiDuration } from 'react-icons/gi'
import { BiCategory } from 'react-icons/bi'
import { MdCurrencyRupee } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Events = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(events)
  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    const results = events.filter(
      (item) =>
        item.category.toLowerCase().includes(value.toLowerCase()) ||
        item.eventName.toLowerCase().includes(value.toLowerCase())
    )

    setSearchResults(results)
  }
  return (
    <div className="mt-16 min-h-[100vh] w-[100vw] bg-slate-900">
      {/* Search Bar */}
      <div className="max-w-[1200px] text-white mx-auto py-5">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search Events"
            className="p-3 text-black w-full rounded-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          <IoMdSearch className="absolute right-4 top-2 text-red-500 text-3xl" />
        </div>

        {/* Filter & Events */}
        <div className="flex flex-row items-start mt-16 justify-center">
          {/* Filter */}
          <div></div>
          {/* Events */}
          <div className="flex flex-col gap-5">
            {searchResults.map((item, index) => {
              return (
                <div className="max-w-sm w-full lg:min-w-[930px] lg:flex">
                  <Skeleton className="h-48 lg:h-auto l g:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                    <div
                      className="h-48 lg:h-auto min-w-[400px] lg: w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                      //   style="background-image: url('/img/card-left.jpg')"
                      title="Woman holding a mug"
                    ></div>
                  </Skeleton>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center">
                        {/* <svg
                          className="fill-current text-gray-500 w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg> */}
                        Event Name
                      </p>
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {item.eventName}
                      </div>
                      <p className="text-gray-700 text-base">{item.desc}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex items-center gap-3">
                        {/* <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="/img/jonathan.jpg"
                        alt=""
                        />
                        <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                        Jonathan Reinink
                        </p>
                        <p className="text-gray-600">Aug 18</p>
                    </div> */}

                        {/* No of Participants  */}
                        <div className="text-black flex items-center justify-center flex-row gap-1">
                          <IoMdPeople className="text-xl" />
                          <p className="text-lg font-semibold">
                            {item.noOfParticipant}
                          </p>
                        </div>
                        {/* Duration  */}
                        <div className="text-black flex items-center justify-center flex-row gap-1">
                          <GiDuration className="text-xl" />
                          <p className="text-lg truncate max-w-[100px] font-semibold">
                            {item.duration} hr
                          </p>
                        </div>
                        {/* Category  */}
                        <div className="text-black flex items-center justify-center flex-row gap-1">
                          <BiCategory className="text-xl" />
                          <p className="text-lg font-semibold truncate max-w-[100px]">
                            {item.category}
                          </p>
                        </div>
                        {/* Amount  */}
                        <div className="text-black flex items-center justify-center flex-row gap-1">
                          <MdCurrencyRupee className="text-xl" />
                          <p className="text-lg font-semibold">{item.amount}</p>
                        </div>
                      </div>
                      {/* <MdCurrencyRupee className="text-xl" />
                        <p className="text-lg font-semibold">{item.amount}</p> */}
                      <Link to="/form">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Register Now
                        </button>
                      </Link>
                    </div>
                    {/* Stars  */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
