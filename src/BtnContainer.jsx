import React from 'react'


const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map(() => {
        return ( 
          <button key={item.id} 
          onClick={}
          className='job-btn'>
            {item.company}
          </button>;
          );
      })}
    </div>
  );
};

export default BtnContainer

// - S7-206:Cr8 BtnContainer component
// - S7-206:Accessing jobs @BtnContainer component
// - S7-206: Add CN btn-container @return div
// - S7-206: Add jobs.map with callback function @return div
// - S7-206: Add return with button @callback function
// - S7-206:Add key with accessing item.id @return button key
// - S7-206:Accessing item.company @value return
// - S7-207:Accessing currentItem
// - S7-207:Accessing setCurrentItem
// - S7-207:Add CN job-btn @button return
// - S7-207:Add base onClick @button return
