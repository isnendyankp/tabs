import Duties from './Duties';

const JobInfo = ({ jobs, currentItem }) => {
  // alternatives
  const { company, dates, duties, title } = jobs[currentItem];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;

// - S7-204:Cr8 base JobInfo component
// - S7-204:Pass in parameter jobs
// - S7-204:Add article with CN job-info
// - S7-204:Add propertys equal to jobs with index 0
// - S7-204:Add h3 with pass in title
// - S7-204:Add span with CN job-company
// - S7-204:Pass in company on span
// - S7-204:Add Paragraph with CN job-date
// - S7-204:Add Duties on return
// - S7-204:Passin duties on Duties return
// - S7-204:Passin dates on p with CN job-date
// - S7-207:call in currentItem state @jobinfo component
// - S7-207:change index 0 jobs for currentItem state
// - S7-207:Fix code & double check @JobInfo.jsx (remove import junk code)
