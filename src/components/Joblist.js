import React from 'react'
import JobCard from './JobCard';

const Joblist = () => {
  const jobs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex-center" id="project">
      <div className="container-fluid project-container">
        <h2 className="text-center p-3">Jobs of the Day</h2>
        <div className="row justify-content-between">
          {jobs.map((e, i) => <JobCard input={e}/> ) }
        </div>
      </div>
    </div>
  )
}

export default Joblist