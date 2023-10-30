import React from 'react'

function PricingComponents({item}) {
  return (
    
   <div className="card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 dark:bg-zinc-900/30 dark:border-zinc-700/50">
               <div className="card-body">
                <div className="space-y-2">
                  <h1 className="uppercase text-sm dark:text-white">{item.title}</h1>
                  <h1 className="text-4xl dark:text-white">{item.price}</h1>
                  <h1 className="uppercase text-gray-400 dark:text-gray-300/60 text-xs">
                    {item.text}
                  </h1>
                </div>
                <hr className="my-7 dark:border-zinc-700/50" />
                <div className="space-y-5">
                  <p className="dark:text-gray-300/80">
                    {item.width}:{" "}
                    <span className="text-red-500 font-medium">{item.width_amount}</span>
                  </p>
                  <p className="dark:text-gray-300/80">
                    {item.space}:{" "}
                    <span className="text-red-500 font-medium">{item.space_amount}</span>
                  </p>
                  <p className="dark:text-gray-300/80">
                    {item.support}:{" "}
                    <span className="text-red-500 font-medium">{item.support_type}</span>
                  </p>
                  <p className="dark:text-gray-300/80">
                    <span className="text-red-500 font-medium">{item.domain_amount}</span> {item.domain}
                  </p>
                  <p className="dark:text-gray-300/80">
                    <span className="text-red-500 font-medium">{item.hidden_type}</span>{item.hidden}
                  </p>
                </div>
                {/* Button */}
                <a
                  href="signup.html"
                  className="btn bg-red-500 text-white mt-10"
                >
                  Join Now
                </a>
                </div>
                </div>
  )
}

export default PricingComponents


  