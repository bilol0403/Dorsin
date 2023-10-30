import React from 'react'

function Us() {
  return (
 <section className="bg-gray-100 py-6 dark:bg-zinc-800">
        <div className="container">
          <div className="grid lg:grid-cols-3 items-center gap-6">
            {/* Social Account Link */}
            <div className="space-x-3">
              <a
                href="#"
                className="border-2 border-gray-400 w-12 h-12 text-xl rounded-full inline-flex text-center items-center text-gray-400 dark:border-zinc-700/30 hover:text-red-500"
              >
                <i className="mdi mdi-facebook m-auto" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-400 w-12 h-12 text-xl rounded-full inline-flex text-center items-center text-gray-400 dark:border-zinc-700/30 hover:text-red-500"
              >
                <i className="mdi mdi-twitter m-auto" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-400 w-12 h-12 text-xl rounded-full inline-flex text-center items-center text-gray-400 dark:border-zinc-700/30 hover:text-red-500"
              >
                <i className="mdi mdi-linkedin m-auto" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-400 w-12 h-12 text-xl rounded-full inline-flex text-center items-center text-gray-400 dark:border-zinc-700/30 hover:text-red-500"
              >
                <i className="mdi mdi-google-plus m-auto" />
              </a>
            </div>
            {/* Contect Number */}
            <div className="lg:text-center">
              <h1 className="text-lg dark:text-gray-300/80">
                <a href="tel:+1123XXXXX0">
                  <i className="pe-7s-call text-black align-middle text-[22px] ltr:mr-2 rtl:ml-2 dark:text-white" />
                  +1 123 456 7890
                </a>
              </h1>
            </div>
            {/* Contect Mail */}
            <div className="ltr:lg:text-right rtl:lg:text-left">
              <h1 className="text-lg dark:text-gray-300/80">
                <a href="mailto:abc@example.com">
                  <i className="pe-7s-mail-open text-black align-middle text-[22px] ltr:mr-2 rtl:ml-2 dark:text-white" />
                  abc@example.com
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Us
