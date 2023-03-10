import React from 'react'
import SectionFlooring from '../components/sectionFlooring'
import SectionHome from '../components/sectionOne'
import { Scroll } from '../context'
import { useContext, useRef } from 'react'
import Eco from "../components/Eco";
import Solar from "../components/Solar";
import CoolStuff from '../components/CoolStuff-section.js';
export default function Home() {

  const {pageNum, setPageNum} = useContext(Scroll)
  let scrollwhere = useRef(0)

  const scrollHandle=()=>{
    if(window.scrollY == 100 || window.scrollY == 102){
      pageNum < 6 ? setPageNum(pageNum + 1) : setPageNum(1)
  }
  }

  window.addEventListener("scroll", scrollHandle)

  return (
    <div className="main">
    <section>{<SectionHome/>}</section>
    <section> <Solar /></section>
    <section><Eco /></section>
    <section> <CoolStuff/></section>
    <section>{<SectionFlooring  />}</section>
    </div>
  )

  }



