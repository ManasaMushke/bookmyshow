import React from 'react'
   function Premiers ({nrimg,nrp,nrL}) {
  return (
    <div>
        <img src={nrimg} alt="" style={{width:"220px" ,height:"380px" ,borderRadius:"8px"}} />
        <p>{nrp}</p>
        <p>{nrL}</p>
    </div>
  )
}

export default Premiers