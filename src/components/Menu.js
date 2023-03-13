import React from 'react'
import { useContext } from 'react'
import { MenuDisplay } from '../context'

export default function Menu({background}) {


  const { menuDis, setMenuDis} = useContext(MenuDisplay)
  return (
   <div>
     <div className='basis-1/2  flex justify-end' onClick={()=>setMenuDis(!menuDis)}>
          <div className='menu flex items-baseline m-12' style={{display: menuDis? "none": "flex", backgroundColor: background }}>
            <img src={require("../img/menulogo.png")} alt="menulogo" className='m-auto '/>
          </div>
    </div>
    <div className='bg-black p-12  h-screen w-screen menutran z-50' style={{display: menuDis? 'block': 'none', position: "fixed", top: 0, right: 0, width: menuDis? "100%": 0  }}>
      <div className='flex flex-row justify-between'>
        <div className='basis-1/2'>
          <p className='text-white text-xs border-b w-1/12' style={{borderBlockColor: "#9D6156"}}>English</p>
        </div>
        <div className='basis-1/2  flex justify-end' onClick={()=>setMenuDis(!menuDis)}>
          <img src={require("../img/cancel.png")} alt="cancel" className='w-10' />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='basis-1/3 text-white text-3xl mt-20 font-bold text-start'>
          <div className='p-6 pl-0 border-b border-slate-700 max-x-full menuname'>Home</div>
          <div className='p-6 pl-0 border-b border-slate-700 max-x-full menuname'>Project</div>
          <div className='p-6 pl-0 border-b border-slate-700 max-x-full menuname'>360° Tour</div>
          <div className='p-6 pl-0 border-b border-slate-700 max-x-full menuname'>About Us</div>
          <div className='p-6 text-2xl font-medium mt-24 flex flex-row justify-between call' >
            <p>+976 99232424 </p>
            <img src={require("../img/cellphone.png")}  alt="icon" className='w-8 h-8'/>
          </div>
        </div>
        <div className='basis-2/3 flex justify-end mt-12'>
          <img src={require("../img/menupic.png")} alt="menupic" className='w-2/3   z-10 '/>
          <img src={require("../img/menupicdot.png")} alt="dot" className='w-1/3 absolute bottom-12 -rigth-12   z-0'/>
        </div>
      </div>
    </div>
   </div>
  )
}

