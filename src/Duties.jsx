import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({duties}) => {
    console.log(duties);
    return (
    <div>
     {duties.map((duty, index)=>)}
    </div>
  )
}

export default Duties

// - S7-204:cr8 Duties component base
// - S7-204:Accessing duties on Duties component
// - S7-204:Checking log after acces duties at Duties component
// - S7-205:import react icons double right
// - S7-205:Add base duties map with iterating over
// - S7-205:Add access para duty & index