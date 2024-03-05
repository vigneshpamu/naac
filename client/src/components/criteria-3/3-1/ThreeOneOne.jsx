import { sortByYearDescending } from '@/utils/sortByYear'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ThreeOneOne = () => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 15 }, (_, index) => currentYear - index)
  const arr = ['BSc IT', 'B.Com', 'BAF', 'BMS']
  const [tableData, setTableData] = useState()
  const [singleData, setSingleData] = useState({
    year: '', // Example initial value
    projectEndowments: '',
    principalInvestigator: '',
    department: '',
    funds: 0, // Example initial value
    duration: '',
    file: [],
  })
  const [sData, setSData] = useState()

  const formSubmit = async (name, amount, id) => {
    const { data } = await axios.post(
      'http://localhost:3003/api/criteria-3/three-one-one',
      {
        singleData,
      }
    )
    setSData(data)
    console.log(data)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name)
    setSingleData({ ...singleData, [name]: value })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make Axios GET request
        const { data } = await axios.get(
          'http://localhost:3003/api/criteria-3/get/three-one-one'
        )
        // const fData = response.data.filter((item) => item.category === 'car')
        // Set the data in state
        const newArr = sortByYearDescending(data)
        console.log(newArr, 'Yes Data')
        setTableData(newArr)
        // setDataNew(fData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData() // Call the fetchData function
  }, [sData])

  useEffect(() => {
    if (singleData?.year?.length > 0) {
      const filteredData = tableData?.filter(
        (item) => Number(item.year) === Number(singleData?.year)
      )
      if (filteredData.length > 0) {
        const firstItem = filteredData[0] // Assuming you want to take the first item from filtered data

        setSingleData((prevSingleData) => ({
          ...prevSingleData,
          projectEndowments: firstItem.projectEndowments,
          principalInvestigator: firstItem.principalInvestigator,
          department: firstItem.department,
          funds: firstItem.funds, // Example initial value
          duration: firstItem.duration,
          file: [],
        }))
      }
    }
  }, [singleData?.year])

  useEffect(() => {
    console.log(singleData, 'Yes Single Data')
  }, [singleData])

  return (
    <div className="px-10">
      {/* Criteria Information - (Title) */}
      <div>
        <p className="text-xl underline font-semibold mb-3">
          About Criteria :-{' '}
        </p>
        <p className="text-xl">
          Grants received from Government and non-governmental agencies for
          research projects / endowments in the institution during the last five
          years (INR in Lakhs)
        </p>
      </div>

      <div className="relative overflow-x-auto mt-10">
        <p className="text-xl underline font-semibold mb-3">
          Last {tableData?.length} Years Data :-
        </p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Year
              </th>
              <th scope="col" className="px- py-3">
                Project/ Endowments
              </th>
              <th scope="col" className="px-4 py-3">
                Principal Investigator
              </th>
              <th scope="col" className="px-4 py-3">
                Department
              </th>
              <th scope="col" className="px-4 py-3">
                Funds (INR)
              </th>
              <th scope="col" className="px-4 py-3">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-4 text-black">{item.year}</td>
                  <td className="px-4 py-4 text-black">
                    {item.projectEndowments}
                  </td>
                  <td className="px-4 py-4 text-black">
                    {item.principalInvestigator}
                  </td>
                  <td className="px-4 py-4 text-black">{item.department}</td>
                  <td className="px-4 py-4 text-black">&#8377; {item.funds}</td>
                  <td className="px-4 py-4 text-black">{item.duration}</td>
                </tr>
              )
            })}

            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          
              <td className="px-4 py-4 text-black">2022</td>
              <td className="px-4 py-4 text-black">Laptop</td>
              <td className="px-4 py-4 text-black">Danish</td>
              <td className="px-4 py-4 text-black">BAF</td>
              <td className="px-4 py-4 text-black">&#8377; 1,10,000</td>
              <td className="px-4 py-4 text-black">2 Years</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
          
              <td className="px-4 py-4  text-black">2021</td>
              <td className="px-4 py-4 text-black">Laptop</td>
              <td className="px-4 py-4 text-black">Aryan</td>
              <td className="px-4 py-4 text-black">B.Com</td>
              <td className="px-4 py-4 text-black">&#8377; 1,10,000</td>
              <td className="px-4 py-4 text-black">2 Years</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      {/* Criteria Update / Input - (Form)  */}
      <div>
        <p className="text-xl underline font-semibold mt-8 mb-7">
          Add or Update Data :-
        </p>

        <div className="mt-5">
          <div>
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Year
                </label>
                <select
                  id="yearSelect"
                  name="year"
                  value={singleData?.year}
                  onChange={handleChange}
                  className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option hidden>Select Year</option>{' '}
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="projectEndowments"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the Project/ Endowments
                </label>
                <input
                  type="text"
                  name="projectEndowments"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.projectEndowments}
                  onChange={handleChange}
                  placeholder="Name of the Project/ Endowments"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the Principal Investigator
                </label>
                <input
                  type="text"
                  name="principalInvestigator"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.principalInvestigator}
                  onChange={handleChange}
                  placeholder="Name of the Principal Investigator"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-7">
              <div className="col-span-1">
                <label
                  htmlFor="degree"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Department
                </label>
                <select
                  id="degree"
                  name="department"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.department}
                  onChange={handleChange}
                  className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option hidden>Select Department</option>{' '}
                  {arr.map((degree, index) => (
                    <option key={index} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Funds provided (INR)
                </label>
                <input
                  type="number"
                  name="funds"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.funds}
                  onChange={handleChange}
                  placeholder="Funds Provided in (INR)"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Duration of the project
                </label>
                <input
                  type="text"
                  name="duration"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.duration}
                  onChange={handleChange}
                  placeholder="Duration of the project"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>
            <button
              onClick={formSubmit}
              className="mt-8 border p-4 px-10 rounded-md bg-green-600 text-white text-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeOneOne
