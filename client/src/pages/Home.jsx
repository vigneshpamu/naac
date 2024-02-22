import { BoxesCore } from '@/components/aceternity/BoxesCore'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React from 'react'

export default function Home() {
  const meteors = new Array(50 || 20).fill(true)
  return (
    <div className="h-[100vh] relative bg-slate-900 ">
      {meteors.map((el, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
          }}
        ></span>
      ))}
      {/* <div className="relative flex items-center flex-row justify-between  h-full max-w-[1200px] py-5 mx-auto">
        <div>
          <p className="text-white  text-4xl font-semibold">Welcome To </p>
          <p className="text-white  text-5xl font-semibold">
            <span className="text-red-500"># </span>
            FANTASIES 2024
          </p>
          <p className="text-white">Scroll down to see all the events</p>
        </div>
        <div className="  ">
         
          <img src="/images/hero/hero2.png" className="w-[350px]" alt="" />
        </div>
      </div> */}
      <div className="bg-slate-900 ">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* <!-- Announcement Banner --> */}
            <div className="flex justify-center">
              <a
                className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
                href=""
              >
                <p className="me-2 inline-block text-white text-sm">
                  SITARA - Legacy Unfolded
                </p>
                <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg
                    className="flex-shrink-0 size-4"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            {/* <!-- End Announcement Banner --> */}

            {/* <!-- Title --> */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-5xl lg :text-6xl">
                Fantasies: Where Dreams Unfold
              </h1>
              <h1 className="block mt-5 font-medium text-gray-200 text-4xl sm:text-3xl ">
                Ignite Your Passion at SIES College of Commerce and Economics
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">
                Join us at Fantasies, SIES College's cultural fest, celebrating
                25 years with the radiant theme "SITARA". Reflect on our
                journey, embrace the present, and anticipate boundless
                creativity ahead.
              </p>
            </div>

            {/* <!-- Buttons --> */}
            <div className="text-center flex items-center justify-center flex-row gap-5">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Register Now
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Explore Events
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
      </div>
    </div>
  )
}
