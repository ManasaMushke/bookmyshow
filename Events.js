import React from 'react'

function Events({evtimg}) {
  return (
    <div>
        <img src={evtimg} alt="" style={{width:"220px" , height:"220px" , borderRadius:"8px"}} />
    </div>
  )
}

export default Events

// APP.CSS
// .Movies{
//   display: flex;
// justify-content: space-between;
// }
// .stream{
//  margin: 55px;
// }
// .events{
//  display: flex;
//  justify-content: space-between;
// }
// .premiers{
//  background-color: #2b3149;
// }
// .premiers2{
//  color: #fff;
// }
// .new{
//  color: #fff;
//  display: flex;
//  justify-content: space-around;
// }
// .on-strmng{
//   display: flex;
//  justify-content: space-between;
// }
