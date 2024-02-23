import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
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
    <>
      <div className="w-full bg-gray-100 py-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-2xl  px-3 ">Important Links</p>
          <div className="flex flex-col px-3 md:flex-row flex-wrap gap-5 justify-between mt-8 text-orange-500">
            {links.map((item) => {
              return <Link to={item.link}>{item.name}</Link>
            })}
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex items-center justify-center p-8">
        <p>© 2024 SIES College Of Commerce & Economics. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
