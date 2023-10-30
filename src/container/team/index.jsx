import React from 'react'
import teamData from '../../data/team.data'
import TeamComponents from '../../components/Team'

function Team() {
  return (
  <section className="pt-6" id="team">
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/3 space-y-5 text-center">
              {/* Section Title */}
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                Behind the People
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto" />
              <p className="text-gray-400 dark:text-gray-300/60">
                It is a long established fact that create category leading brand
                experiences a reader will be distracted by the readable content
                of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
            {/* Team Member 1 */}
            {teamData.map((item, index) => 
              <TeamComponents item={item} key={index}/>
            )}

          </div>
        </div>
      </section>

  )
}

export default Team
