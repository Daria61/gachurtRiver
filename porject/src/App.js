import React from 'react'
import  './App.css';
import { Routes , Route} from "react-router-dom"
import Home from './pages/home'
import { MenuDisplay } from './context';
import { useState } from 'react';
export default function App() {
  const [menuDis, setMenuDis] = useState(false)

  return (
    <MenuDisplay.Provider value={{ menuDis, setMenuDis}}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </MenuDisplay.Provider>
  )
}

