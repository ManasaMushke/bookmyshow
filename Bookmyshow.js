// import React from 'react'

// function Bookmyshow({imgurl , moviename,para}) {
//   return (
//     <div>
//      <img src={imgurl} style ={{width:"200px" , height:"330px",borderRadius:"8px"}}alt="" />
//      <p><b>{moviename}</b></p>
//      <p>{para}</p>
       
//     </div>
//   )
// }

// export default Bookmyshow
import React from 'react'

 
    function Bookmyshow({movieimg,mname,type}) {
  return (
    <div>
     <img src={movieimg} alt="" style={{width:"220px" ,height:"400px" ,borderRadius:"8px"}} />
     <p><b>{mname}</b></p>
     <p>{type}</p>
    </div>
  )
}

export default Bookmyshow

