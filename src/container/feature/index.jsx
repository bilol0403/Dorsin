import React from 'react'

function Feature() {
  return (
   <section className="bg-gray-50 dark:bg-zinc-900/30" id="feature">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-7">
            <div className="lg:col-span-5">
              <div className="space-y-6">
                <h3 className="text-2xl dark:text-white">
                  A digital web design studio creating modern &amp; engaging
                  online experiences
                </h3>
                <p className="text-gray-400 dark:text-gray-300/60">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
                <ul className="text-gray-400 dark:text-gray-300/60 list-disc list-outside space-y-3 text-sm ml-5 marker:text-red-500 marker:text-lg">
                  <li>We put a lot of effort in design.</li>
                  <li>The most important ingredient of successful website.</li>
                  <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                  <li>Submit Your Orgnization.</li>
                </ul>
              </div>
              {/* Button */}
              <a href="#" className="btn bg-red-500 text-white mt-14">
                Learn More
                <i className="mdi mdi-arrow-right align-middle" />
              </a>
            </div>
            <div className="lg:col-span-7">
              <img
                src="assets/images/online-world.svg"
                alt="online-world"
                className="w-[500px] lg:ml-auto md:mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Feature
