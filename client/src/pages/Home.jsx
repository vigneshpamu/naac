import { BoxesCore } from '@/components/aceternity/BoxesCore'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import HeroSect from '@/components/home/HeroSect'
import { Link } from 'react-router-dom'
import Footer from '@/components/common/Footer'
import UpButton from '@/components/common/UpButton'

export default function Home() {
  const data = [
    {
      id: 1,
      name: 'NAAC CERTIFICATE 2018',
      img: '/images/hero/1.png',
      pdfUrl: 'src/pdf/1.pdf',
    },
    {
      id: 2,
      name: 'NAAC CERTIFICATE 2015',
      img: '/images/hero/2.png',
      pdfUrl: 'src/pdf/2.pdf',
    },
    {
      id: 3,
      name: 'NAAC CERTIFICATE 2009',
      img: '/images/hero/3.png',
      pdfUrl: 'src/pdf/3.pdf',
    },
    {
      id: 4,
      name: 'NAAC CERTIFICATE 2004',
      img: '/images/hero/4.png',
      pdfUrl: 'src/pdf/4.pdf',
    },
  ]
  const meteors = new Array(50 || 20).fill(true)

  const handleDownload = (path, name) => {
    // Assuming your PDF file is located at the specified path
    const pdfPath = path
    // Creating an anchor element
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = 'filename.pdf' // You can specify the filename here
    link.click()
  }

  const links = [
    {
      name: 'Register',
      link: 'https://siesce.edu.in/',
    },
    {
      name: 'Faculty Login',
      link: 'https://siesce.edu.in/#',
    },
    {
      name: 'Download Study Material',
      link: 'https://siesce.edu.in/e-resources',
    },
    {
      name: 'Library',
      link: 'https://siesce.edu.in/library',
    },
    {
      name: 'College Committees',
      link: 'https://siesce.edu.in/college-committees',
    },
    {
      name: 'Publications',
      link: 'https://siesce.edu.in/publications',
    },
  ]

  return (
    <div className="h-full max-w-8xl mt-16 relative bg-gray-50 ">
      <UpButton />
      {/* {meteors.map((el, idx) => (
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
      ))} */}
      <HeroSect />
      <div className="w-full bg-gray-100 py-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-3xl mb-6 px-4 xl:px-0  font-semibold">
            NAAC Certificates{' '}
          </p>
          <div className="grid px-5 gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white flex flex-col gap-4 rounded-sm h-full p-3 hove r:scale-105 transition-all cursor-pointer"
                >
                  <div className="h-[300px] ">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="py-2 text-lg font-semibold">{item.name}</p>
                  <button
                    onClick={() => handleDownload(item.pdfUrl, item.name)}
                    className="bg-orange-500 p-2 text-white rounded-md hover:opacity-95"
                  >
                    Download PDF
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
