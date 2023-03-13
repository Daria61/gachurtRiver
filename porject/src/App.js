import React from 'react'
import  './App.css';
import { Routes , Route} from "react-router-dom"
import Home from './pages/home'
import { MenuDisplay } from './context';
import { useState } from 'react';
import { Scroll } from './context';
import Floor from './pages/floor';
import SectionFlooring from './components/sectionFlooringOne';
import Flooringtwo from './components/flooringtwo';
import Flooringthree from './components/flooringthree';
import Solar from './pages/Solar';
import Eco from './pages/Eco';
import CoolStuff from './pages/CoolStuff';
export default function App() {
  const [menuDis, setMenuDis] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  return (
    <Scroll.Provider value={{pageNum, setPageNum}} >
    <MenuDisplay.Provider value={{ menuDis, setMenuDis}}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/solar' element={<Solar/>}></Route>
      <Route path='/eco' element={<Eco/>}></Route>
      <Route></Route>
      <Route path='/' element={<Floor/>}>
        <Route path='/one' element={<SectionFlooring/>}></Route>
        <Route path='/two' element={<Flooringtwo/>}></Route>
        <Route path='/three' element={<Flooringthree/>}></Route>
      </Route>
    </Routes>
    </MenuDisplay.Provider>
    </Scroll.Provider>
  )
  }