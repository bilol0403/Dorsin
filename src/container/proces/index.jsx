import React from 'react'

function Proces() {
  return (
     <section className="bg-gray-50 dark:bg-zinc-900/30">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/3 space-y-5 text-center">
              {/* Section Title */}
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                Work Process
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto" />
              <p className="text-gray-400 dark:text-gray-300/60">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                pulvinar metus molestie sed Semikoli.
              </p>
            </div>
          </div>
          {/* Work Process Icons */}
          <div className="lg:grid grid-cols-2 gap-5 mt-12 hidden">
            <div className="relative">
              <div className="w-10 h-10 text-[36px] text-center items-center flex absolute text-white bg-red-500 rounded-full z-10 top-[80px] ltr:right-40 rtl:left-40 ltr:rotate-0 rtl:rotate-180">
                <i className="pe-7s-angle-right mx-auto" />
              </div>
            </div>
            <div className="relative">
              <div className="w-10 h-10 text-[36px] text-center items-center flex absolute text-white bg-red-500 rounded-full z-10 top-[80px] ltr:left-40 rtl:right-40 ltr:rotate-0 rtl:rotate-180">
                <i className="pe-7s-angle-right mx-auto" />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 mt-12">
            {/* Work Process Part 1 */}
            <div className="relative ">
              <div className="text-center space-y-2">
                <i className="pe-7s-pen text-red-500 text-5xl" />
                <h4 className="pt-3 text-lg font-medium dark:text-white">
                  Tell us what you need
                </h4>
                <p className="text-gray-400 dark:text-gray-300/60">
                  The Big Oxmox advised her not to do so.
                </p>
              </div>
              <div className="before:content-[''] before:absolute before:hidden before:border before:border-dashed before:border-gray-300 before:w-2/3 ltr:before:-right-32 rtl:before:-left-32 before:top-[50px] before:lg:block before:dark:border-zinc-700/50" />
            </div>
            {/* Work Process Part 2 */}
            <div className="relative">
              <div className="text-center space-y-2">
                <i className="pe-7s-id text-red-500 text-5xl" />
                <h4 className="pt-3 text-lg font-medium dark:text-white">
                  Get free quotes
                </h4>
                <p className="text-gray-400 dark:text-gray-300/60">
                  Little Blind Text didn’t listen.
                </p>
              </div>
              <div className="before:content-[''] before:absolute before:hidden before:border before:border-dashed before:border-gray-300 before:w-2/3 ltr:before:-right-32 rtl:before:-left-32 before:top-[50px] before:lg:block before:dark:border-zinc-700/50" />
            </div>
            {/* Work Process Part 3 */}
            <div className="relative">
              <div className="text-center space-y-2">
                <i className="pe-7s-target text-red-500 text-5xl" />
                <h4 className="pt-3 text-lg font-medium dark:text-white">
                  Deliver high quality product
                </h4>
                <p className="text-gray-400 dark:text-gray-300/60">
                  When she reached the first hills.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto">
            {/* Button */}
            <a href="signup.html" className="btn bg-red-500 text-white mt-12">
              Get Started <i className="mdi mdi-arrow-right" />
            </a>
          </div>
        </div>
      </section>
  )
}

export default Proces
