import React from 'react'

function Streaming({stmngEnt,stmngEntH,stmngEntP}) {
  return (
    <div>
     <img src={stmngEnt} alt="" style={{width:"220px" ,height:"380px" ,borderRadius:"8px"}} />
     <p>{stmngEntH}</p>
     <p>{stmngEntP}</p>
    </div>
  )
}

export default Streaming