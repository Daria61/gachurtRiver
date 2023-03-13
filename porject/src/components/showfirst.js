import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import SectionFlooring from './sectionFlooringOne'
import Menu from '../components/Menu'
export default function Showfirst () {
    const [houseA, setHouseA] = useState(true)
    const [houseB, setHouseB] = useState(false)
    const [houseC, setHouseC] = useState(false)


    const changeImg=(id)=>{
        if(id === 1){
            setHouseA(true)
            setHouseB(false)
            setHouseC(false)
        }else if(id === 2){
            setHouseA(false)
            setHouseB(true)
            setHouseC(false)
        }else{
            setHouseA(false)
            setHouseB(false)
            setHouseC(true)
        }
    }

  return (
    <div className='h-screen relative ' >
       {<Menu background="grey"/>}
       <div className='p-10 flex flex-row justify-between '>
        <div className='basis-1/2'>
        <img alt="logo" src={require("../img/greylogo.png")} className="w-20"/>
        </div>
       </div>

       <div className='flex flex-row mt-[40px]'>
          <div className='basis-2/5 h-full flex flex-col items-end pr-[40px] ml-[20px]'>
            <div className='h-48 relative'>
            <NavLink to="/one" onClick={()=> changeImg(1)}  >
                <p style={{display: houseA? "block" :"none"}}>House A</p>
                <img src={require("../img/activeHouse.png")} alt="active house"  style={{display: houseA? "block": "none", position: "absolute", zIndex: "-1", objectFit: "cover", bottom: "45px", right: "40px"}} className="h-48 "/>
                <img  src={houseA? require("../img/houseAactive.png"):  require("../img/houseAlil.png")} alt="houseC" className='w-4/5'/>
            </NavLink>
            </div>
            <div className='h-48 relative'>
            <NavLink to="/two" onClick={()=> changeImg(2)}>
                <p style={{display: houseB? "block" :"none"}}>House B</p>
                <img src={require("../img/activeHouse.png")} alt="active house"  style={{display: houseB? "block": "none", position: "absolute", zIndex: "-1", objectFit: "cover", bottom: "55px", right: "40px"}} className="h-48 "/>
                <img src={houseB? require("../img/housebactive.png"):  require("../img/houseBlil.png")} alt="houseC" className='w-4/5'/>
            </NavLink>
            </div>
            <div className='h-48 relative'> 
            <NavLink to="/three" onClick={()=> changeImg(3)} >
              <p style={{display: houseC? "block" :"none"}}>House C</p>
              <img src={require("../img/activeHouse.png")} alt="active house"  style={{display: houseC? "block": "none", position: "absolute", zIndex: "-1", objectFit: "cover", bottom: "55px", right: "40px"}} className="h-48 "/>
              <img src={houseC? require("../img/houseCactive.png"):  require("../img/houseClil.png")} alt="houseC" className='w-4/5'/>
             </NavLink>
            </div>
          </div>
          <SectionFlooring/>
       </div>
  </div>
  )
}
