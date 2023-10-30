import React from 'react'

function Info() {
  return (
    <section className="py-28 ">
        <div className="overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="assets/images/img-2.jpg"
            alt="build your website image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-800 w-full h-full opacity-90" />
        </div>
        <div className="container ">
          <div className="lg:flex justify-center">
            <div className="lg:w-7/12 text-center relative">
              <div className="space-y-6">
                <h2 className="text-white text-3xl">Let's Get Started</h2>
                <div className="h-0.5 bg-red-500 w-14 mx-auto" />
                <p className="text-gray-300/80">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <a href="#" className="btn bg-white text-black mb-5">
                  Get Started <i className="mdi mdi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img
            src="assets/images/bg-pattern-light.png"
            alt="bg-pattern-light"
            className="block dark:hidden"
          />
          <img
            src="assets/images/bg-pattern-dark2.png"
            alt="bg-pattern-light"
            className="hidden dark:block"
          />
        </div>
      </section>
  )
}

export default Info
