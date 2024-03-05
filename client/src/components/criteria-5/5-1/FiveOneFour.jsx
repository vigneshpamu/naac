import React from 'react'

const FiveOneFour = () => {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 15 }, (_, index) => currentYear - index)
  const arr = ['BSc IT', 'B.Com', 'BAF', 'BMS']
  return (
    <div className="px-10">
      {/* Criteria Information - (Title) */}
      <div>
        <p className="text-xl underline font-semibold mb-3">
          About Criteria :-{' '}
        </p>
        <p className="text-xl">
          Average percentage of students benefitted by scholarships, freeships
          etc. provided by the institution / non- government agencies during the
          last five years
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
                Name of the Scheme
              </th>
              <th scope="col" className="px-4 py-3">
                No of students passed in the competitive exam
              </th>
              <th scope="col" className="px-4 py-3">
                No of students placed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {/* <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th> */}
              <td className="px-4 py-4 text-black">2023</td>
              <td className="px-4 py-4 text-black">Laptop</td>
              <td className="px-4 py-4 text-black">Vignesh</td>
              <td className="px-4 py-4 text-black">Vignesh</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {/* <th
                scope="row"
                className="px-4 py-4 text-black font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th> */}
              <td className="px-4 py-4 text-black">2022</td>
              <td className="px-4 py-4 text-black">Laptop</td>
              <td className="px-4 py-4 text-black">Danish</td>
              <td className="px-4 py-4 text-black">Danish</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              {/* <th
                scope="row"
                className="px-4 py-4 text-black font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th> */}
              <td className="px-4 py-4  text-black">2021</td>
              <td className="px-4 py-4 text-black">Laptop</td>
              <td className="px-4 py-4 text-black">Aryan</td>
              <td className="px-4 py-4 text-black">Aryan</td>
            </tr>
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
                  name="yearSelect"
                  className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
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
                  Name of the Scheme
                </label>
                <input
                  type="text"
                  placeholder="Name of the Scheme"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of students placed
                </label>
                <input
                  type="text"
                  placeholder="Number of students placed"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4 gap-5">
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  No of students passed in the competitive exam
                </label>
                <input
                  type="text"
                  placeholder="No of students passed in the competitive exam"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>
            <button className="mt-8 border p-4 px-10 rounded-md bg-green-600 text-white text-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiveOneFour