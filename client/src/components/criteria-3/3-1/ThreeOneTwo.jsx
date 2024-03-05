import { sortByYearDescending } from '@/utils/sortByYear'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ThreeOneTwo = () => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 15 }, (_, index) => currentYear - index)
  const arr = ['BSc IT', 'B.Com', 'BAF', 'BMS']
  const [tableData, setTableData] = useState()
  const [singleData, setSingleData] = useState({
    year: '', // Example initial value
    researchProject: '',
    principalInvestigator: '',
    fundingAgency: '',
    department: '',
    funds: 0, // Example initial value
    duration: '',
    file: [],
  })
  const [sData, setSData] = useState()

  const formSubmit = async (name, amount, id) => {
    const { data } = await axios.post(
      'http://localhost:3003/api/criteria-3/three-one-two',
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
          'http://localhost:3003/api/criteria-3/get/three-one-two'
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
          researchProject: firstItem.researchProject,
          fundingAgency: firstItem.fundingAgency,
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
          Percentage of departments having Research projects funded by
          government and non government agencies during the last five years
        </p>
      </div>

      <div className="relative overflow-x-auto mt-10">
        <p className="text-xl underline font-semibold mb-3">
          Last 3 Years Data :-{' '}
        </p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Year
              </th>
              <th scope="col" className="px- py-3">
                Research project
              </th>
              <th scope="col" className="px-4 py-3">
                Principal Investigator
              </th>
              <th scope="col" className="px-4 py-3">
                Funding agency
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
                    {item.researchProject}
                  </td>
                  <td className="px-4 py-4 text-black">
                    {item.principalInvestigator}
                  </td>
                  <td className="px-4 py-4 text-black">{item.fundingAgency}</td>
                  <td className="px-4 py-4 text-black">{item.department}</td>
                  <td className="px-4 py-4 text-black">&#8377; {item.funds}</td>
                  <td className="px-4 py-4 text-black">{item.duration}</td>
                </tr>
              )
            })}
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
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the Research project
                </label>
                <input
                  type="text"
                  name="researchProject"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.researchProject}
                  onChange={handleChange}
                  placeholder="Name of the Research project"
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
                  type="text"
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
            <div className="grid grid-cols-1 gap-5 mt-7">
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Funding agency
                </label>
                <input
                  type="text"
                  name="fundingAgency"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.fundingAgency}
                  onChange={handleChange}
                  placeholder="Funding agency"
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

export default ThreeOneTwo
