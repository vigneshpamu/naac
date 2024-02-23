import { events } from '@/data/eventsData'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const Success = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [user, setUser] = useState()
  const [order, setOrder] = useState()
  const [category, setCategory] = useState()
  const [date, setDate] = useState()
  const [query] = useSearchParams()
  function convertDateFormat(isoDate) {
    const dateObject = new Date(isoDate)
    const month = String(dateObject.getMonth() + 1).padStart(2, '0') // Months are zero-based
    const day = String(dateObject.getDate()).padStart(2, '0')
    const year = dateObject.getFullYear()

    return `${month}/${day}/${year}`
  }
  //   console.log(currentUser)

  useEffect(() => {
    console.log(query.get('order_id'))
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3003/api/orders/order',
          {
            id: `${query.get('order_id')}`,
          }
        )
        console.log(response.data, 'Data Data')
        setOrder(response.data.order)
        setUser(response.data.user)
        // const isoDate = order?.createdAt
        // console.log(isoDate, 'Date')
        // const formattedDate = convertDateFormat(order.createdAt)
        // setDate(formattedDate)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [query])

  useEffect(() => {
    console.log(order, 'Yes')
    if (order) {
      const isoDate = order?.createdAt
      console.log(isoDate, 'Date')
      const formattedDate = convertDateFormat(order.createdAt)
      setDate(formattedDate)

      const finalD = events.filter((item) => item.eventName === order.name)
      setCategory(finalD[0])
    }
  }, [order])

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt')
    // setLoader(true)
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'mm', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      doc.save('receipt.pdf')
    })
  }

  return (
    <div className="mt-16 bg-slate-900 min-h-[100vh] text-white">
      <div className="max-w-[1200px] py-20 flex flex-col gap-5 items-center justify-center mx-auto ">
        {/* <p className="text-4xl">We have sent you the receipt on your email</p> */}
        <p className="text-4xl">Download the receipt</p>
        <Link to="/profile">
          <button className="p-3 bg-blue-600 rounded-lg">
            See your Orders
          </button>
        </Link>
        <div className="actual-receipt">
          <div className="max-w-[90rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
            <div className="sm:w-11/12 lg:w-3/4 mx-auto">
              {/* Card */}
              <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
                {/* Grid */}
                <div className="flex justify-between">
                  <div>
                    <img
                      src="/images/logo/logo2.png"
                      className="h-8"
                      alt="Flowbite Logo"
                    />
                    <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
                      FANTASIES
                    </h1>
                  </div>
                  {/* Col */}

                  <div className="text-end">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                      Order ID #
                    </h2>
                    <span className="mt-1 block text-gray-500">
                      {order?.order_id}
                    </span>

                    {/* <address className="mt-4 not-italic text-gray-800 dark:text-gray-200">
                      45 Roker Terrace
                      <br />
                      Latheronwheel
                      <br />
                      KW5 8NW, London
                      <br />
                      United Kingdom
                      <br />
                    </address> */}
                  </div>
                  {/* Col */}
                </div>
                {/* End Grid */}

                {/* Grid */}
                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Bill to:
                    </h3>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {currentUser.email}
                    </h3>
                  </div>
                  {/* Col */}

                  <div className="sm:text-end space-y-2">
                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                      <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                          Invoice date:
                        </dt>
                        <dd className="col-span-2 text-gray-500">{date}</dd>
                      </dl>
                    </div>
                    {/* End Grid */}
                  </div>
                  {/* Col */}
                </div>
                {/* End Grid */}

                {/* Table */}
                <div className="mt-6">
                  <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                    <div className="hidden sm:grid sm:grid-cols-5">
                      <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                        Event
                      </div>
                      <div className="text-start text-xs font-medium text-gray-500 uppercase">
                        Category
                      </div>

                      <div className="text-end text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </div>
                    </div>

                    <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      <div className="col-span-full sm:col-span-2">
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                          Item
                        </h5>
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {order?.name}
                        </p>
                      </div>
                      <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                          Category
                        </h5>
                        <p className="text-gray-800 dark:text-gray-200">
                          {/* {user} */}
                          {category?.category}
                        </p>
                      </div>

                      <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </h5>
                        <p className="sm:text-end text-gray-800 dark:text-gray-200">
                          &#8377; {order?.amount / 100}
                        </p>
                      </div>
                    </div>

                    {/* more rows... */}
                  </div>
                </div>
                {/* End Table */}

                {/* Flex */}
                <div className="mt-8 flex sm:justify-end">
                  <div className="w-full max-w-2xl sm:text-end space-y-2">
                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                      {/* more rows... */}
                    </div>
                    {/* End Grid */}
                  </div>
                </div>
                {/* End Flex */}

                <div className="mt-8 sm:mt-12">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Thank you!
                  </h4>
                  <p className="text-gray-500">
                    If you have any questions concerning this invoice, use the
                    following contact information:
                  </p>
                  <div className="mt-2">
                    <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                      vignesh@gmail.com
                    </p>
                    <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                      +91 xxxxx70543
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm text-gray-500">© 2024 Fantasies.</p>
              </div>
              {/* End Card */}

              {/* Buttons */}
              <button
                onClick={downloadPDF}
                className="mt-6 flex justify-end gap-x-3"
              >
                <a
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download PDF
                </a>
                {/* <a
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect width="12" height="8" x="6" y="14" />
                  </svg>
                  Print
                </a> */}
              </button>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
