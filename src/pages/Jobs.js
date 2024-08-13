import React from 'react'
import JobsHeader from '../components/JobsHeader'
import JobCard from '../components/JobCard'

const Jobs = () => {
  const jobs = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <JobsHeader/>
      <div className="flex-center" id="project">
        <div className="container-fluid project-container">
          <div className="row justify-content-between">
            {jobs.map((e, i) => <JobCard input={e} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs