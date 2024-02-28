import React from 'react'

const ThreeFourTwo = () => {
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
          Number of functional MoUs with national and international
          institutions, universities, industries, corporate houses etc. during
          the last five years
        </p>
      </div>
      {/* Criteria Table - (Table) */}

      {/* 2019 - 2023
∙ Name of the Project/ Endowments
∙ Name of the Principal Investigator
∙ Department of Principal Investigator
∙ Year of Award
∙ Funds provided
∙ Duration of the project
. File Upload! */}

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
                Organization with which MoU is signed
              </th>
              <th scope="col" className="px- py-3">
                Institution
              </th>
              <th scope="col" className="px-4 py-3">
                Duration
              </th>
              <th scope="col" className="px-4 py-3">
                List the activities under MoU
              </th>
              <th scope="col" className="px-4 py-3">
                Number of students/teachers
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
              <td className="px-4 py-4 text-black">Bsc IT</td>
              <td className="px-4 py-4 text-black">&#8377; 1,10,000</td>
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
              <td className="px-4 py-4 text-black">BAF</td>
              <td className="px-4 py-4 text-black">&#8377; 1,10,000</td>
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
              <td className="px-4 py-4 text-black">B.Com</td>
              <td className="px-4 py-4 text-black">&#8377; 1,10,000</td>
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
                  Organization with which MoU is signed{' '}
                </label>
                <input
                  type="text"
                  placeholder="Organization with which MoU is signed"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the institution/industry/corporate house
                </label>
                <input
                  type="text"
                  placeholder="Name of the institution/industry/corporate house"
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
                  Duration{' '}
                </label>
                <input
                  type="text"
                  placeholder="Duration"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  List the actual activities under each MoU
                </label>
                <input
                  type="text"
                  placeholder="List the actual activities under each MoU"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="yearSelect"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of students/teachers
                </label>
                <input
                  type="number"
                  placeholder="Number of students/teachers"
                  className="w-full mt-2  border border-gray-200 rounded-md p-2"
                />
              </div>
            </div>

            {/* <div className="grid grid-cols-1 gap-5 mt-7"></div> */}
            <button className="mt-8 border p-4 px-10 rounded-md bg-green-600 text-white text-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeFourTwo
