import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Form = () => {
  const [event, setEvent] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const location = useLocation()
  const params = useParams()
  // const { category, name } = params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const category = searchParams.get('category')
    const name = searchParams.get('name')
    setEvent(name)
    setCategory(category)
    console.log('Category:', category)
    console.log('Name:', name)
  }, [location.search])
  return (
    <div className="max-w-8xl min-h-[100vh] bg-slate-900 mt-16">
      <div className="text-white  max-w-[1200px] mx-auto flex flex-col gap-4 items-center justify-center py-10">
        <p className="text-3xl font-semibold">Form</p>
        <input
          type="text"
          placeholder="Enter Name"
          className="p-2 w-[400px] rounded-sm"
        />
        <input
          type="text"
          placeholder="Enter Email"
          className="p-2 w-[400px] rounded-sm"
        />
        <input
          type="text"
          placeholder="Enter Event"
          value={category}
          className="p-2 w-[400px] text-black rounded-sm"
          disabled={true}
        />
        <input
          type="text"
          placeholder="Enter Event"
          value={event}
          className="p-2 w-[400px] text-black rounded-sm"
          disabled={true}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Download Recipt
        </button>
      </div>
    </div>
  )
}

export default Form
