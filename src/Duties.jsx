import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();
        // console.log(id);
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;

// - S7-204:cr8 Duties component base
// - S7-204:Accessing duties on Duties component
// - S7-204:Checking log after acces duties at Duties component
// - S7-205:import react icons double right
// - S7-205:Add base duties map with iterating over
// - S7-205:Add access para duty & index
// - S7-205:Add return div
// - S7-205:Accessing index with key at return div
// - S7-205:Add CN job-desc at return div
// - S7-205:Access FaAngleDoubleRight
// - S7-205:Add CN job-icon FaAngleDoubleRight
// - S7-205:Access duty in new paragraph
// - S7-205:install UUID
// - S7-205:import UUID
// - S7-205:cr8 id = uuidv4
// - S7-205:checking log id
// - S7-205:change accessing index key with pass in id
// - S7-207:Fix code & double check @Duties.jsx (remove junk import)
