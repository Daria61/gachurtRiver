import React, { useState } from "react";
import SectionFlooring from "../components/sectionFlooringOne";
import SectionHome from "../components/sectionOne";
import Eco from "../pages/Eco";
import Solar from "../pages/Solar";
import CoolStuff from '../pages/CoolStuff';
import View from '../pages/view'
import "../css/scroll.css";
import Gallery from "../pages/Gallery";
import "../App.css"
import Floor from "../components/showfirst"

export default function Home() {


    // const scrollHandler1 = () => {
    //     if (window.scrollY < h && window.scrollY > 0) {
    //         setPage(2);
    //     } else if (window.scrollY < 2 * h && window.scrollY > h) {
    //         setPage(3);
    //     } else if (window.scrollY < 3 * h && window.scrollY > 2 * h) {
    //         setPage(4);
    //     } else if (window.scrollY < 4 * h && window.scrollY > 3 * h) {
    //         setPage(5);
    //     }
    //     console.log(page);
    //     // console.log(window.innerHeight);
    // };

    // window.addEventListener("scroll", scrollHandler1);

  

  // window.addEventListener("scroll", scrollHandle)



  
    // const { pageNum, setPageNum } = useContext(Scroll);
    // let scrollwhere = useRef(0);

    // const scrollHandle = () => {
    //     if (window.scrollY == 100 || window.scrollY == 102) {
    //         pageNum < 6 ? setPageNum(pageNum + 1) : setPageNum(1);
    //     }
    // };

    // window.addEventListener("scroll", scrollHandle);

    return (
        <div className="main">
            <section>{<SectionHome />}</section>
            <section><Solar /> </section>
            <section ><Eco /></section>
            <section ><CoolStuff /></section>
            <section > <Floor /> </section>
            <section><Gallery /></section>
            <section><View/></section>
        </div>
    );
}
