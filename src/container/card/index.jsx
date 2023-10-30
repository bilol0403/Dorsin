import React from 'react'

function Card() {
  return (
  <div id="modal-video" data-modal-target className="hidden">
        <div className="flex items-center justify-center fixed inset-0 z-50">
          <div
            data-modal-close
            data-modal-overlay
            tabIndex={-1}
            data-class-in="opacity-50"
            data-class-out="opacity-0"
            className="opacity-0 fixed inset-0 w-full z-40 transition-opacity duration-300 bg-black select-none"
          ></div>
          <div
            data-modal-wrapper
            data-class-in="opacity-100 translate-y-0"
            data-class-out="opacity-0 -translate-y-5"
            className="opacity-0 -translate-y-5 w-full z-50 overflow-auto max-w-3xl max-h-screen transition-all duration-300  flex flex-col transform rounded-md"
          >
            <div className="absolute top-10 right-10 z-50">
              {/* Modal Close Button */}
              <button
                data-modal-close
                aria-label="Close"
                type="button"
                className="w-10 h-10 text-2xl bg-gray-50 rounded-lg bg-opacity-50 text-gray-700 hover:text-black focus:text-black transition ease-in-out duration-150 ml-auto"
              >
                <i className="mdi mdi-close text-center -z-20" />
                <span className="sr-only">Close Button</span>
              </button>
            </div>
            <div className="relative overflow-x-hidden overflow-y-auto h-full flex-grow p-5">
              <video id="VisaChipCardVideo" className="w-full" controls>
                {/* Modal Video */}
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card;
