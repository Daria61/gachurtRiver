import React from 'react'
import Menu from './Menu'
export default function Values() {
  return (
    <div className='bg-black h-screen relative'>
        {<Menu background={"grey"}/>}
        <div className='flex'>
            <div className='basis-1/3'>
                <div className='bg-white w-full '>s</div>
            </div>
            <div className='basis-2/3'></div>
        </div>

    </div>
  )
}
