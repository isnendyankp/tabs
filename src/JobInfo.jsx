import React from 'react'

const JobInfo = ({jobs}) => {
  // alternatives
  const { company, dates, duties, title } = jobs[0];

  return (
    <article className='job-info'>
      <h3>{title}</h3>
    </article>
  )
}

export default JobInfo

// - S7-204:Cr8 base JobInfo component
// - S7-204:Pass in parameter jobs
// - S7-204:Add article with CN job-info
// - S7-204:Add propertys equal to jobs with index 0
// - S7-204:Add h3 with pass in title