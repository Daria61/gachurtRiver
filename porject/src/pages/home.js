import React from 'react'
import SectionFlooring from '../components/sectionFlooring'
import SectionHome from '../components/sectionOne'
import { Scroll } from '../context'
import { useContext } from 'react'
export default function Home() {

  const {pageNum, setPageNum} = useContext(Scroll)

  const scrollHandle=()=>{
    if(window.scrollY == 100){
      pageNum < 10 ? setPageNum(pageNum + 1) : setPageNum(0)
  }


  }

  window.addEventListener("scroll", scrollHandle)

  return (
    <div className="main">
    <section>{<SectionHome/>}</section>
    <section>{<SectionFlooring  />}</section>
    </div>
  )
}


