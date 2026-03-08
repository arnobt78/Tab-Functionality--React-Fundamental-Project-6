import { v4 as uuidv4 } from 'uuid';

import { FaAngleDoubleRight } from 'react-icons/fa';

/**
 * Duties — renders a list of duty strings (e.g. job responsibilities). Each item has an icon
 * and text. We use uuid for keys because the API gives a string array with no stable id per item.
 */
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        // console.log(id);
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
