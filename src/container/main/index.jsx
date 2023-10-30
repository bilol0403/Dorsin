import React from 'react'

function Main() {
  return (
     <section className="lg:pb-40 lg:pt-56 py-32" id="home">
        <div className="overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="assets/images/bg-home.jpg"
            alt="build your website image"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-purple-800 opacity-90" />
        </div>
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/3 text-center relative">
              <div className="space-y-6 mb-10">
                {/* Home Page Title */}
                <h2 className="text-white md:text-[32px] lg:text-[46px] leading-[64px] capitalize ">
                  We help startups launch their products
                </h2>
                <p className="text-gray-300/80">
                  Etiam sed.Interdum consequat proin vestibulum class at.Moltin
                  gives you the platform. A small <br /> river named Duden flows
                  by their place and supplies it with the necessary regelialia.
                </p>
                {/* Video Modal Outline Button */}
                <button
                  type="button"
                  className="btn border text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                  data-modal-trigger
                  aria-controls="modal-video"
                  aria-expanded="false"
                >
                  Watch Now{" "}
                  <span className="mdi mdi-play-circle text-[20px] align-middle ltr:ml-2 rtl:mr-2" />
                </button>
              </div>
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

export default Main
