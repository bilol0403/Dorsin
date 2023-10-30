import React from 'react'

function Dream() {
  return (
    <section className="py-28">
        <div className="overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="assets/images/img-1.jpg"
            alt="build your website image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-800 w-full h-full opacity-90" />
        </div>
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-7/12 text-center relative">
              <h2 className="text-white text-3xl">
                Build your dream website today
              </h2>
              <p className="pt-3 text-gray-300/80">
                But nothing the copy said could convince her and so it didn’t
                take long until a few insidious Copy Writers ambushed her.
              </p>
              {/* Button */}
              <a href="#pricing" className="btn bg-white text-black mt-8 mb-5">
                View Plan &amp; Pricing
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img
            src="assets/images/bg-pattern.png"
            alt="bg-pattern"
            className="block dark:hidden"
          />
          <img
            src="assets/images/bg-pattern-dark.png"
            alt="bg-pattern"
            className="hidden dark:block"
          />
        </div>
      </section>
  )
}

export default Dream
