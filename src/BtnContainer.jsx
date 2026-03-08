/**
 * BtnContainer — renders one button per job (tab labels). Uses currentItem to highlight
 * the active tab; clicking a button calls setCurrentItem(index) to switch the selected job.
 */
const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {/* Map over jobs: each button shows the company name and updates selection by index. */}
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
