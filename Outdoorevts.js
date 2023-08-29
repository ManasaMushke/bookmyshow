import React from 'react'

function Outdoorevts({otdr ,otdrH , otdrP}) {
  return (
    <div>
        <img src={otdr} alt=""  style={{width:"200%" ,height:"200%" ,borderRadius:"8px"}}/>
        <h3>{otdrH}</h3>
        <p>{otdrP}</p>
    </div>
  )
}

export default Outdoorevts


// APP .JS
import "./App.css";
import Bookmyshow from "./Bookmyshow"
import React from 'react'
import Events from "./Events";
import NewRelease from "./NewRelease";
import Premiers from "./Premiers";
import Streaming from "./Streaming";
import Outdoorevts from "./Outdoorevts";

const Movies = [
 {
   M1:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE0LjFLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-qfgbsaxudm-portrait.jpg",
   x :"King of Kotha",
   y:"Action/Crime/Drama"

 },
 {
   M1:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuNUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-majgxvmwjx-portrait.jpg",
   x :"Gandeevadh ari Arjuna",
   y:"Action/Thriller"

 },
 {
   M1:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMTNLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
   x :"Jailer",
   y:"Action/Drama/Thriller"

 },
 {
   M1:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTMxLjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
   x :"Dream Girl 2",
   y:"Comedy/Drama/Romantic"

 },
 {
   M1:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDkuMksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
   x :"Gadar 2: The Katha Contines",
   y:"Action/Drama/period"
 }
]
const live = [
  {
   B:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png"
  },
  {
   B:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png"
  },
  {
   B:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png"
  },
  {
   B:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png"
  },
  {
   B:"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png"
  }

]
const newrelease =[
 {
   c:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00355405-uvzapgqrqj-portrait.jpg",
   d:"No Harder Feelings",
   e:"English"
 },
 {
 c:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00367166-eqdqhsgkda-portrait.jpg",
 d:"Sun Moon",
 e:"English"
 },
 {
   c:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00367165-lygnshgqpj-portrait.jpg",
 d:"Drive My Car",
 e:"Japanese"
 },
 {
   c:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00366591-adclasnztt-portrait.jpg",
   d:"One Fine Morning",
   e:"French"
 },
 {
   c:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00359297-nuzbxteqct-portrait.jpg",
   d:"Pui Pui Molcar:S1",
   e:"Japanese"
 }
]
const streaming = [
{
 strmg :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366284-hfppaydegr-portrait.jpg",
 m:"NCPA-HSBC Music Workshop by Shantanu Moitra",
 n:"Watch on Zoom"
},
{
 strmg :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362655-dmbacjymrn-portrait.jpg",
 m:"Talk Session in Business (Ft.Jaidep Prabhu)",
 n:"Watch on Zoom"
},
{
 strmg :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAzMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362657-wckmcxzwcg-portrait.jpg",
 m:"Talk Session in Culinary Arts(Ft.Joao Garcia)",
 n:"Watch on Zoom"
},
{
 strmg :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367009-mcgkcabczp-portrait.jpg",
 m:"WeMet Speed Dating",
 n:"Watch on Zoom"
},
{
 strmg :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367001-mtutvvwdfp-portrait.jpg",
 m:"Masterclass Get your dream Job!",
 n:"Watch on Zoom"
}
]
const outdrevnt = [
 {
  outdimg:"",
  R:"MVM INDIA TOUR-DJ CHETAS",
  S:"Prime club and Kitchen:Hyderabad"
 },
 {
   outdimg:"",
  R:"MotoGP Bharat 2023",
  S:"Buddh International Circuit:Greater Noida"
 },
 {
   outdimg:"",
  R:"Love in the Cholera of Time",
  S:"Rangbhoomp Spaces:Hyderabad"
 },
 {
   outdimg:"",
   R:"Wonderla Amusement Park Hyderabad",
   S:"Wonderla Amusement Park Hyderabad"
 },
 {
   outdimg:"",
  R:"PAKISTAN vs SRILANKA-ICC MEN'S CWC 2023",
  S:"Rajiv Gandhi Cricket Stadium:Hyderabad"
 }
]

function App() {
 return (
   <div>
    <div className="R-movies">
     <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png" alt="" style={{width:"100%"}}/>
     <h2>Recommanded Movies</h2>
     <div className="Movies">
   {
  Movies.map((list)=>{
    return<Bookmyshow movieimg={list.M1}
   mname={list.x}
    type={list.y}></Bookmyshow>
  })
}
   </div>
   </div>
   <div className="Liveshows">
     <div className="stream"><img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="" style={{width:"100%"}} /></div>
     <h2>The Best Of Live Events</h2>
   <div className="events">
     {
       live.map((shows)=>{
         return<Events evtimg={shows.B}></Events>
       })
     }
   </div>
   </div>
   <div className="premiers">
     <div className="friday">
     <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt=""  style={{width:"100%"}}/>
     </div>
     <div className="premiers2">
       <h2>Premiers</h2>
       <p>Brand new releases every Friday</p>
       <div className="new">
         {
          newrelease.map((newR)=>{
           return<Premiers nrimg={newR.c}
           nrp={newR.d}
           nrL={newR.e}></Premiers>
          })
         }
       </div>
     </div>
   </div>
   <div className="online">
     <h2>Online Streaming Events</h2>
    <div className="on-strmng">
     {
       streaming.map((onstmngEnt)=>{
         return<Streaming stmngEnt={onstmngEnt.strmg}
         stmngEntH={onstmngEnt.m}
         stmngEntP={onstmngEnt.n}></Streaming>
       })
     }      
    </div>
   </div>
   <div className="outdoor">
     <div className="outdoor-new">
     <h2>Outdoor Events</h2>
     <img src="https://in.bmscdn.com/discovery-catalog/lib/tr:w-37/new-tag-icon.png" alt="" />
     </div>
    <div className="outdoor-i"style={{display:"flex"}}>
     {
        outdrevnt.map((otdrevnts)=>{
         return<Outdoorevts otdr={otdrevnts.outdimg}
         otdrH={otdrevnts.R}
         otdrP={otdrevnts.S}
         ></Outdoorevts>
       })
     }      
    </div>
   </div>
   </div>
 )
}
export default App