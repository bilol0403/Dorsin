import React from 'react'
import blockData from '../../data/block.data'
import BlockComponents from '../../components/Block'

function Block() {
  return (
    <section className="pt-12 bg-gray-50 dark:bg-zinc-900/30" id="blog">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/3 space-y-5 text-center">
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                Blog
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto" />
              <p className="text-gray-400 dark:text-gray-300/60">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean class at a euismod mus ipsum
                vel ex finibus semper luctus quam.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
            {blockData.map((item, index) =>
            <BlockComponents item={item} key={index} />
            )}
          </div>
        </div>
      </section>
  )
}

export default Block
