import React from 'react'
import SectionFlooring from '../components/sectionFlooring'
import SectionHome from '../components/sectionOne'
export default function Home() {
  
  return (
    <div className="main">
    <section>{<SectionHome/>}</section>
    <section>{<SectionFlooring  />}</section>
    </div>
  )
}


