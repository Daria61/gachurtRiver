import React, { useEffect } from 'react'
import SectionFlooring from '../components/sectionFlooringOne'
import SectionHome from '../components/sectionOne'
import { Scroll } from '../context'
import { useContext, useRef } from 'react'
import Eco from "./Eco";
import Solar from "../components/Solar";
import Showfirst from '../components/showfirst'
import CoolStuff from './CoolStuff.js';
import Values from '../components/values'
export default function Home() {

  const {pageNum, setPageNum} = useContext(Scroll)
  let scrollwhere = useRef()

  const scrollHandle=()=>{
    console.log(0);
  }
  
  useEffect(()=>{
    const div = scrollwhere.current
    div.addEventListener("scroll", scrollHandle)
  })

  window.addEventListener("scroll", scrollHandle)

  return (
    <div className="main">
    <section ref={scrollwhere}>{<SectionHome/>}</section>
  
    </div>
  )

  }



