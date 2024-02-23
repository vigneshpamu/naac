import Footer from '@/components/common/Footer'
import UpButton from '@/components/common/UpButton'
import React from 'react'

const About = () => {
  const prinicipalsData = [
    {
      name: 'Dr. Nina Roy Choudhury',
      tenure: ' 2017 - Till Date',
      img: '/images/about/principal/1.jpg',
    },
    {
      name: 'Dr. Kinnarry Thakkar',
      tenure: '2015 - 2017',
      img: '/images/about/principal/2.jpg',
    },
    {
      name: 'Dr. Minu Thomas',
      tenure: '2010 - 2015',
      img: '/images/about/principal/3.jpg',
    },
    {
      name: 'Dr. Sheela Nabar',
      tenure: '2005 - 2010',
      img: '/images/about/principal/4.jpg',
    },
    {
      name: 'Mr. Y. B. Bhide',
      tenure: '1999 - 2005',
      img: '/images/about/principal/5.jpg',
    },
    {
      name: 'Mr. C. B. Tambe',
      tenure: '1996 - 1999',
      img: '/images/about/principal/6.jpg',
    },
    {
      name: 'Shri. C. Sadasivan',
      tenure: '1993 - 1996',
      img: '/images/about/principal/7.jpg',
    },
    {
      name: 'Shri. S. D. Mulgaonkar',
      tenure: '1992 - 1993',
      img: '/images/about/principal/8.jpg',
    },
    {
      name: 'Shri. P. M. Potdar',
      tenure: '1989 - 1992',
      img: '/images/about/principal/9.jpg',
    },
  ]
  return (
    <div className="h-full max-w-8xl  mt-16 relative">
      <UpButton />
      <div
        className="bg-cover h-[90px] bg-center"
        style={{ backgroundImage: "url('/images/about/hero.jpg')" }}
      ></div>
      <div className="mt-[-60px] max-w-[1200px] mx-auto">
        <p className="text-2xl font-bold">Home &#62; About</p>
      </div>
      <div className="mt-20 max-w-[1200px] mx-auto flex flex-row gap-8">
        <div className="flex flex-col gap-5 text-xl">
          <p className="text-blue-800 leading-relaxed">
            The South Indian Education Society (SIES) was established to promote
            the cause of education in Mumbai. SIES College of Commerce and
            Economics was established in May 1989 and was inaugurated by the
            then Vice President of India Dr. Shankar Dayal Sharma. It has now
            become synonymous with excellence in education.
          </p>
          <p className="leading-relaxed">
            The college that began as a single faculty college with 400 students
            and 7 lecturers, now offers under graduate and post graduate courses
            in Commerce, IT, Management, Banking and Insurance, Accounting and
            Finance to over 2,700 students supported by over 50 full-time and
            visiting faculty members. The Junior College with over 1,000
            students and 18 teachers give the college the required strength to
            provide a complete package of quality higher education.
          </p>
          <p className="leading-relaxed">
            In a short history of a couple decades, the college has not only
            produced university rankers but also the achievers in sports and
            other cultural activities
          </p>
        </div>
        <div>
          <img
            src="/images/about/main2.png"
            alt=""
            className="min-w-[380px] h-auto "
          />
        </div>
      </div>
      <div className="max-w-[1200px] flex items-start justify-start py-10 mx-auto">
        <div className="mt-16 max-w-[800px]   gap-8">
          <p className="font-semibold text-2xl text-blue-700">
            Our Principals Over The Years
          </p>
          <div className="grid grid-cols-2 gap-16 mt-10">
            {prinicipalsData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-[350px] h-[350px]">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p>{item.tenure}</p>
                  <p>{item.name}</p>
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

export default About
