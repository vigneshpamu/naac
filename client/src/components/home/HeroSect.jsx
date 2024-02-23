import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Link } from 'react-router-dom'
const HeroSect = () => {
  return (
    <>
      <div className="max-w-[1200px] flex items-center  py-16 justify-center flex-col gap-10 mx-auto">
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-blue-800 font-semibold text-center text-xl sm:text-2xl  md:text-3xl">
            SIES COLLEGE OF COMMERCE & ECONOMICS
          </p>
          <p className="text-blue-800 font-semibold text-center text-xl sm:text-2xl  md:text-3xl">
            (AUTONOMOUS)
          </p>
        </div>
        <p className="w-[90%] text-center">
          Keeping in view the growing demand in the stream of Commerce, the SIES
          College of Commerce & Economics was established by the South Indian
          Education Society in May 1989. The then Vice-President Dr. Shankar
          Dayal Sharma inaugurated the College. Right from its inception, the
          College has grown from strength as the results testify year after
          year. The pursuit Of excellence has added to our academic stature and
          the College is among the leading educational institutions in Mumbai
          today.
        </p>
        <Link to="/about">
          <button className="p-3 mb-16 px-10 rounded-2xl bg-orange-500 hover:opacity-90 text-white">
            Learn More
          </button>
        </Link>
        <div className="flex flex-col sm:flex-row gap-20">
          <Dialog className="">
            <DialogTrigger>
              <div className="w-[250px] flex items-center justify-center flex-col gap-2">
                <div className="w-[150px] h-[150px] ">
                  <img
                    src="/images/hero/green.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p>Best College With Clean And Green Environment</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-5">
                  Best College With Clean And Green Environment
                </DialogTitle>
                {/* <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription> */}
                <img
                  src="/images/hero/gcerti.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog className="">
            <DialogTrigger>
              <div className="w-[250px] flex items-center justify-center flex-col gap-2">
                <div className="w-[150px] h-[150px] ">
                  <img
                    src="/images/hero/naac.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>Best College With Clean And Green Environment</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-5">NAAC Accredited</DialogTitle>
                {/* <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription> */}
                <img
                  src="/images/hero/ncerti.jpg"
                  alt=""
                  className="w-full h-full"
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default HeroSect
