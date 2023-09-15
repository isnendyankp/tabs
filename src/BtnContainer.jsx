import React from 'react'


const BtnContainer = ({jobs}) => {
  return (
    <div className='btn-container'>
        {jobs.map(()=>{
            return <button key={item.id}></button>
        })}
    </div>
  )
}

export default BtnContainer

// - S7-206:Cr8 BtnContainer component
// - S7-206:Accessing jobs @BtnContainer component
// - S7-206: Add CN btn-container @return div
// - S7-206: Add jobs.map with callback function @return div
// - S7-206: Add return with button @callback function
// - S7-206:Add key with accessing item.id @return button key
