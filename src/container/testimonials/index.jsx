import React from 'react'

function Testimonials() {
  return (
   <section id="testi">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/3 space-y-5 text-center">
              {/* Section Title */}
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                What they've said
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto" />
              <p className="text-gray-400 dark:text-gray-300/60">
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                pulvinar metus molestie sed Semikoli.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            {/* Clients 1 */}
            <div className="transform transition ease-in-out duration-300 mt-20 lg:mt-10 hover:-translate-y-4">
              <div className="card dark:bg-zinc-900/30 dark:border-zinc-700/50">
                <img
                  src="assets/images/testimonials/user-1.jpg"
                  alt="Testimonials user-1 Image"
                  className="w-20 h-20 -m-10 mx-auto rounded-full p-1 border bg-white dark:bg-zinc-700/20 dark:border-zinc-700/80"
                />
                <div className="card-body mt-4">
                  <p className="text-gray-400 dark:text-gray-300/60 italic text-center">
                    “I feel confident imposing change on myself. It's a lot more
                    fun progressing than looking back. That's why scelerisque
                    pretium dolor, sit amet vehicula erat pelleque need throw
                    curve balls.”
                  </p>
                </div>
              </div>
              <h5 className="text-center uppercase mt-5 dark:text-white">
                Ruben Reed -{" "}
                <span className="text-gray-400 dark:text-gray-300/60 capitalize">
                  Charleston
                </span>
              </h5>
            </div>
            {/* Clients 2 */}
            <div className="transform transition ease-in-out duration-300 mt-20 lg:mt-10 hover:-translate-y-4">
              <div className="card dark:bg-zinc-900/30 dark:border-zinc-700/50">
                <img
                  src="assets/images/testimonials/user-2.jpg"
                  alt="Testimonials user-2 Image"
                  className="w-20 h-20 -m-10 mx-auto rounded-full p-1 border bg-white dark:bg-zinc-700/20 dark:border-zinc-700/80"
                />
                <div className="card-body mt-4">
                  <p className="text-gray-400 dark:text-gray-300/60 italic text-center">
                    “Our task must be to free ourselves by widening our circle
                    of compassion to learned embrace living creatures Integer
                    varius lacus non magna tempor congue natuasre the learned
                    whole its beauty.”
                  </p>
                </div>
              </div>
              <h5 className="text-center uppercase mt-5 dark:text-white">
                Michael P. Howlett -{" "}
                <span className="text-gray-400 dark:text-gray-300/60 capitalize">
                  Worcester
                </span>
              </h5>
            </div>
            {/* Clients 3 */}
            <div className="transform transition ease-in-out duration-300 mt-20 lg:mt-10 hover:-translate-y-4">
              <div className="card dark:bg-zinc-900/30 dark:border-zinc-700/50">
                <img
                  src="assets/images/testimonials/user-3.jpg"
                  alt="Testimonials user-3 Image"
                  className="w-20 h-20 -m-10 mx-auto rounded-full p-1 border bg-white dark:bg-zinc-700/20 dark:border-zinc-700/80"
                />
                <div className="card-body mt-4">
                  <p className="text-gray-400 dark:text-gray-300/60 italic text-center">
                    “I've learned that people will forget what you said, people
                    will forget what you did, but vestibulum learned people will
                    never aliquam in nunc learned quis tincidunt forget how you
                    vestibulum egestas them feel.”
                  </p>
                </div>
              </div>
              <h5 className="text-center uppercase mt-5 dark:text-white">
                Theresa D. Sinclair -{" "}
                <span className="text-gray-400 dark:text-gray-300/60 capitalize">
                  Lynchburg
                </span>
              </h5>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials
