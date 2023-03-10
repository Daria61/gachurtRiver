import React from 'react'
import Menu from "./Menu.js"
import { Scroll } from '../context.js'
import { useContext } from 'react'
export default function SectionFlooring() {

  const { pageNum } = useContext(Scroll)
  return (
    <div className='h-screen relative ' >
      {<Menu background="grey"/>}
         <div className='p-10 flex flex-row justify-between '>
          <div className='basis-1/2'>
          <img alt="logo" src={require("../img/greylogo.png")} className="w-20"/>
          </div>
         </div>
         <div className='flex flex-row '>
            <div className='basis-2/5 m-12'>
              <div className='p-10 pt-0 text-2xl h-1/3'>
                <img src={require("../img/houseAlil.png")} alt="houseA"/>
              </div>
              <div className='p-10 text-2xl h-1/3'>
              <img src={require("../img/houseBlil.png")} alt="houseB"/>
              </div>
              <div className='p-10 text-2xl h-1/3'> 
              <img src={require("../img/houseClil.png")} alt="houseC"/>
              </div>
            </div>
            <div className='w-3/5 bg-black top-0 right-0 h-screen z-0 absolute' >
            <div className='h-4/5'>
            <div className='flex justify-center mt-32 '>
             <img src={require("../img/floorOne.png")} alt="house" className='w-3/5'/>
             </div>
             <div className='flex flex-row text-white justify-center  gap-2'>
              <div style={{backgroundColor: "#9D6156", padding: "8px"}}> First Floor </div>
              <div><img src={require("../img/arrow.png")} alt="arrow"/> </div>
              <div style={{backgroundColor: "#9D6156", padding: "8px"}}> Second Floor </div>
             </div>
            </div>
    
             <div className=' w-fullflex flex-row h-1/5 text-white items-center' style={{backgroundColor: "#9D6156"}}>
              <div className='basis-2/5 '>
                <p className='text-[42px]' style={{fontSize: "42px", fontWeight: "500"}}>146 m2</p>
              </div>
              <div className='basis-3/5 flex flex-row'>
                <div className='basis-1/2'>
                  <p>sdad</p>
                  <p>sadfafs</p>
                </div>
                <div className='basis-1/2'>
                  <p>sdad</p>
                  <p>sadfafs</p>
                </div>
              </div>
             </div>
            </div>
         </div>
    </div>
  )
}
