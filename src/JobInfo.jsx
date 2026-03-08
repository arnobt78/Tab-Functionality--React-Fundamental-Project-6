import Duties from './Duties';

/**
 * JobInfo — displays the currently selected job. Derives the job from jobs[currentItem]
 * and shows title, company, dates, and a list of duties (via the Duties component).
 */
const JobInfo = ({ jobs, currentItem }) => {
  // Destructure the active job so we can render its fields. Same as jobs[currentItem].company, etc.
  const { company, dates, duties, title } = jobs[currentItem];

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
