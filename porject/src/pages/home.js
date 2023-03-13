import React, { useState } from "react";
import SectionFlooring from "../components/sectionFlooring";
import SectionHome from "../components/sectionOne";
import { Scroll } from "../context";
import { useContext, useRef } from "react";
import Eco from "../components/Eco";
import Solar from "../components/Solar";
import CoolStuff from "../components/CoolStuff-section.js";
import "../css/scroll.css";
import Pano from "./pano";
import Gallery from "../components/Gallery";

export default function Home() {
    const [page, setPage] = useState(1);

    let h = window.innerHeight;

    const scrollHandler1 = () => {
        if (window.scrollY < h && window.scrollY > 0) {
            setPage(2);
        } else if (window.scrollY < 2 * h && window.scrollY > h) {
            setPage(3);
        } else if (window.scrollY < 3 * h && window.scrollY > 2 * h) {
            setPage(4);
        } else if (window.scrollY < 4 * h && window.scrollY > 3 * h) {
            setPage(5);
        }
        console.log(page);
        // console.log(window.innerHeight);
    };

    window.addEventListener("scroll", scrollHandler1);

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
            <section className={page == 2 ? "slide-in-bottom" : ""}>
                <Solar />
            </section>
            <section className={page == 3 ? "slide-in-bottom" : ""}>
                <Eco />
            </section>
            <section className={page == 4 ? "slide-in-bottom" : ""}>
                <CoolStuff />
            </section>
            <section className={page == 5 ? "slide-in-bottom" : ""}>
                {<SectionFlooring />}
            </section>
            <Gallery />
        </div>
    );
}
