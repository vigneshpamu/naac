import { events } from '@/data/eventsData'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

const Form = () => {
  const [event, setEvent] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const location = useLocation()
  const params = useParams()
  const [myData, setMyData] = useState()
  // const { category, name } = params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const category = searchParams.get('category')
    const name = searchParams.get('name')
    setEvent(name)
    setCategory(category)

    const single = events.filter((item) => item.eventName === name)
    console.log(single[0])
    setMyData(single[0])
  }, [location.search])
  const { currentUser } = useSelector((state) => state.user)
  const CheckoutHandler = async (name, amount) => {
    const {
      data: { order },
    } = await axios.post('http://localhost:3003/api/payment/checkout', {
      name,
      amount,
      email: currentUser.email,
    })

    console.log({ order })
    console.log(typeof amount)

    var options = {
      key: 'rzp_test_yoQ3nmI7J3LyOK', // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: name, //your business name
      description: 'Event',
      image: 'https://example.com/your_logo',
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: 'http://localhost:3003/api/payment/payment-verification',
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: currentUser.name, //your customer's name
        email: currentUser.email,
        contact: '9000090000', //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    }
    var rzp1 = new window.Razorpay(options)
    rzp1.open()
  }
  return (
    <div className="max-w-8xl min-h-[100vh] bg-slate-900 mt-16">
      <div className="text-white  max-w-[1200px] mx-auto flex flex-col gap-4 items-center justify-center py-10">
        <p className="text-3xl font-semibold">Form</p>
        <input
          type="text"
          placeholder="Enter Name"
          className="p-2 w-[400px] text-black rounded-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Enter Email"
          className="p-2 w-[400px] text-black rounded-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
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
        <div>
          <p className="text-3xl">Pay: {myData?.amount}</p>
        </div>
        <button
          type="button"
          onClick={() => CheckoutHandler(myData?.eventName, myData?.amount)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Proceed Now
        </button>
      </div>
    </div>
  )
}

export default Form
