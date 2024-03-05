import { sortByYearDescending } from '@/utils/sortByYear'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ThreeTwoTwo = () => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 15 }, (_, index) => currentYear - index)
  const arr = ['BSc IT', 'B.Com', 'BAF', 'BMS']
  const [tableData, setTableData] = useState()
  const [singleData, setSingleData] = useState({
    year: '',
    teacherName: '',
    titleOfPaper: '',
    bookTitle: '',
    nameOfAuthor: '',
    titleOfConference: '',
    nameOfPublisher: '',
    isbnIssnNumber: '',
    file: [],
  })
  const [sData, setSData] = useState()

  const formSubmit = async (name, amount, id) => {
    const { data } = await axios.post(
      'http://localhost:3003/api/criteria-3/three-two-two',
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
          'http://localhost:3003/api/criteria-3/get/three-two-two'
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
          teacherName: firstItem.teacherName,
          titleOfPaper: firstItem.titleOfPaper,
          bookTitle: firstItem.bookTitle,
          nameOfAuthor: firstItem.nameOfAuthor,
          titleOfConference: firstItem.titleOfConference, // Example initial value
          nameOfPublisher: firstItem.nameOfPublisher, // Example initial value
          isbnIssnNumber: firstItem.isbnIssnNumber, // Example initial value
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
          Number of books and chapters in edited volumes/books published and
          papers published in national/ international conference proceedings per
          teacher during last five years
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
                Teacher's Name
              </th>
              <th scope="col" className="px- py-3">
                Title of paper
              </th>
              <th scope="col" className="px-4 py-3">
                Book Title
              </th>
              <th scope="col" className="px-4 py-3">
                Name of author
              </th>
              <th scope="col" className="px-4 py-3">
                Title of conference
              </th>
              <th scope="col" className="px-4 py-3">
                Name of the publisher:
              </th>
              <th scope="col" className="px-4 py-3">
                ISBN/ISSN number
              </th>
            </tr>
          </thead>
          <tbody className="text-[1 1px]">
            {tableData?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-4 text-black">{item.year}</td>
                  <td className="px-4 py-4 text-black">{item.teacherName}</td>
                  <td className="px-4 py-4 text-black !overflow-scroll">
                    {item.titleOfPaper}
                  </td>
                  <td className="px-4 py-4 text-black">{item.bookTitle}</td>
                  <td className="px-4 py-4 text-black">{item.nameOfAuthor}</td>
                  <td className="px-4 py-4 text-black">
                    {item.titleOfConference}
                  </td>
                  <td className="px-4 py-4 text-black">
                    {item.nameOfPublisher}
                  </td>
                  <td className="px-4 py-4 text-black">
                    {item.isbnIssnNumber}
                  </td>
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
                  Name of the teacher
                </label>
                <input
                  type="text"
                  placeholder="Name of the teacher"
                  name="teacherName"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.teacherName}
                  onChange={handleChange}
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title of the paper
                </label>
                <input
                  type="text"
                  name="titleOfPaper"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.titleOfPaper}
                  onChange={handleChange}
                  placeholder="Title of the paper"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-7">
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title of the book published
                </label>
                <input
                  type="text"
                  name="bookTitle"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.bookTitle}
                  onChange={handleChange}
                  placeholder="Title of the book published"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the author
                </label>
                <input
                  type="text"
                  name="nameOfAuthor"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.nameOfAuthor}
                  onChange={handleChange}
                  placeholder="Name of the author"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  ISBN/ISSN number
                </label>
                <input
                  type="number"
                  name="isbnIssnNumber"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.isbnIssnNumber}
                  onChange={handleChange}
                  placeholder="ISBN/ISSN number"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-7">
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title of the proceedings of the conference
                </label>
                <input
                  type="text"
                  name="titleOfConference"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.titleOfConference}
                  onChange={handleChange}
                  placeholder="Title of the proceedings of the conference"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the publisher
                </label>
                <input
                  type="text"
                  name="nameOfPublisher"
                  disabled={singleData?.year?.length < 1}
                  value={singleData?.nameOfPublisher}
                  onChange={handleChange}
                  placeholder="Name of the publisher"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>
            {/* <div className="grid grid-cols-1 gap-5 mt-7"></div> */}
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

export default ThreeTwoTwo
