import React from 'react'
import servicesData from '../../data/services.data'
import ServicesComponents from '../../components/services/index.jsx'


function Services() {
  return (
     <section id="services">
        <div className="container">
          <div className="flex justify-center mx-5">
            <div className="lg:w-2/3 space-y-5 text-center">
              {/* Section Title */}
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                Our Service
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto" />
              <p className="text-gray-400 dark:text-gray-300/60">
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that have meaning and add a
                value for our clients.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 mt-12">
            {servicesData.map((item , index) =>
            <ServicesComponents item={item} key={index}/>
            )}
          </div>
        </div>
      </section>
  )
}

export default Services
