import { useState, useEffect } from 'react';
import BtnContainer from './BtnContainer';
import JobInfo from './JobInfo';

// External API endpoint: returns an array of job objects (id, company, title, dates, duties).
const url = 'https://www.course-api.com/react-tabs-project';

/**
 * App — root component. Owns all shared state, fetches job data on mount,
 * and renders the tab buttons + selected job details (or a loading spinner).
 */
function App() {
  // Tracks whether the initial API request is still in progress; starts true until fetch completes.
  const [loading, setLoading] = useState(true);
  // List of job objects from the API; empty until fetch resolves.
  const [jobs, setJobs] = useState([]);
  // Index of the currently selected job (0-based); drives which job is shown in JobInfo.
  const [currentItem, setCurrentItem] = useState(0);

  // Fetches jobs from the API, parses JSON, updates state. Called once on mount via useEffect.
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  // Run fetch once when the component mounts. Empty dependency array [] = run only on mount.
  useEffect(() => {
    // Data fetch on mount: setState in effect is the standard React pattern for loading API data.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional fetch-then-setState
    fetchJobs();
  }, []);
  // Early return: show loading spinner until data is ready. Avoids rendering JobInfo with empty jobs.
  if (loading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }
  // Main UI: tab buttons (left/top) and the selected job’s details (right/below). Layout is responsive via CSS.
  return (
    <section className='jobs-center'>
      {/* Tab buttons — one per job; clicking updates currentItem so JobInfo re-renders with new data. */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* Selected job details — reads jobs[currentItem] and displays title, company, dates, duties. */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}

export default App;
