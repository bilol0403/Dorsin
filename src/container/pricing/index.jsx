import React from 'react'
import pricingData from '../../data/pricing.data'
import PricingComponents from '../../components/pricing'

function Pricing() {
  return (
    <section className="pt-12" id="pricing">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/3 space-y-5 text-center">
              {/* Section Title */}
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                Our Pricing
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto" />
              <p className="text-gray-400 dark:text-gray-300/60">
                Call to action pricing table is really crucial to your for your
                business website. Make your bids stand-out with amazing options.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {/* Pricing Card Economy */}
            
              {pricingData.map((item, index) =>
                <PricingComponents item={item} key={index} />
              )}
              </div>
            </div>

          
      </section>
  )
}

export default Pricing
