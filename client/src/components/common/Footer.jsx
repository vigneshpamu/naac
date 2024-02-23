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
    <div className="w-full bg-gray-100 py-10">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-2xl">Important Links</p>
        <div className="flex flex-row justify-between mt-8 text-orange-500">
          {links.map((item) => {
            return <Link to={item.link}>{item.name}</Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer
