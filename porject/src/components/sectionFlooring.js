import React from 'react'
import Menu from "./Menu.js"
export default function SectionFlooring() {

  return (
    <div className='h-screen relative' id='section-2'>
      {<Menu background="grey"/>}
         <div className='p-10 flex flex-row justify-between'>
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
            <div className='w-3/5 bg-black absolute top-0 right-0 h-screen z-0' >
             <div className='flex justify-center mt-32 '>
             <img src={require("../img/floorOne.png")} alt="house" className='w-3/5'/>
             </div>
    
             <div className='bg-brown w-full  flex flex-row text-white ' style={{backgroundColor: "#9D6156"}}>
              <div className='basis-2/5'>
                <p>146 m2</p>
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
