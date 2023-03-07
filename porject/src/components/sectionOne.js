import React from 'react'
import Menu from "./Menu.js"
export default function SectionHome() {
  return (
    <div className='backimg h-screen ' id='section-1'>
      {<Menu background="black"/>}
     <div className='backGrad h-screen'>
     <div className='p-10 flex flex-row justify-between'>
          <div className='basis-1/2'>
          <img alt="logo" src={require("../img/whitelogo.png")} className="w-20"/>
          </div>
      </div>
      <div className='text-white text-center mt-44'>
        <h1 className='text-[98px]'>Gachurt Riverhill</h1>
        <p className='mt-10 m-auto text-[16px] max-w-screen-md'>Whether you're looking for a spacious family home or a sleek and stylish living space. Our properties feature top-of-the-line finishes, premium appliances, and cutting-edge technology</p>
      </div>
     </div>
    </div>
  )
}
