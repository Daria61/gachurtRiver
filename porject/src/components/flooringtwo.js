import React, { useState } from 'react'

export default function FlooringTwo() {
  const [floor, setFloor] = useState(true)

  return (
      <div className='w-3/5 bg-black top-0 right-0 h-screen  z-0 absolute' >
        <div className='h-4/5 overflow-hidden'>
            <div className='flex justify-center mt-32'>
              <img src={floor? require("../img/floorOne.png"):require("../img/floortwo.png") } alt="house" className='w-3/5 '/>
            </div>

            <div className='flex flex-row text-white justify-center gap-5 mt-5'>
              <div className='cursor-pointer' style={{backgroundColor: floor? "#3F2722" : "#9D6156", padding: "8px", color: floor? "#ccc" : "white", height: floor?  "38px": "40px"}} onClick={()=> setFloor(true)}> First Floor </div>
              <div><img src={require("../img/arrow.png")} alt="arrow"/> </div>
              <div className='cursor-pointer'  style={{backgroundColor: floor? "#9D6156":"#3F2722" , padding: "8px",  color: floor? "white" : "#ccc",  height: floor?  "40px": "38px" }}  onClick={()=> setFloor(false)}> Second Floor </div>
            </div>
        </div>
    
        <div className='h-1/5 overflow-hidden flex flex-row text-white items-center' style={{backgroundColor: "#9D6156"}}>
          <div className='basis-2/5 text-center'>
            <p className='text-[42px]' style={{fontSize: "42px", fontWeight: "500"}}>1987 m2</p>
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

  )
}
