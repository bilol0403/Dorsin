import React from 'react'

function Contact() {
  return (
    <section id="contact">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/3 space-y-5 text-center">
              {/* Section Title */}
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                Get in touch
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto" />
              <p className="text-gray-400 dark:text-gray-300/60">
                We thrive when coming up with innovative ideas but also
                understand that a smart concept should be supported with
                faucibus sapien odio measurable results.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
            <div>
              {/* office Address */}
              <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2 dark:text-white">
                    Office Address 1:
                  </h1>
                  <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">
                    4461 Cedar Street Moro, AR 72368
                  </h1>
                </div>
                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2 dark:text-white">
                    Office Address 2:
                  </h1>
                  <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">
                    2467 Swick Hill Street <br />
                    New Orleans, LA 70171
                  </h1>
                </div>
                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2 dark:text-white">
                    Office Address 3:
                  </h1>
                  <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">
                    9:00AM To 6:00PM
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              {/* Contact Form */}
              <form
                method="post"
                onsubmit="return validateForm()"
                name="myForm"
                id="myForm"
              >
                <p id="error-msg" />
                <div id="simple-msg" />
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                      placeholder="Enter your name"
                    />
                    {/* Email ID Input */}
                    <input
                      type="email"
                      className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  {/* Subject Input */}
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                  />
                  {/* Maessage Textarea Input */}
                  <textarea
                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/20 dark:border-zinc-700/50 dark:placeholder:text-gray-300/50 dark:text-gray-300/50"
                    placeholder="Enter your message"
                    name="comments"
                    id="comments"
                    rows={3}
                    defaultValue={""}
                  />
                  {/* Form Submit Button */}
                  <div className="text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn bg-red-500 text-white"
                      defaultValue="Send Message"
                    />
                  </div>
                </div>
              </form>
              {/*end form*/}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
