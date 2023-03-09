import CoolStuff from '../components/CoolStuff-section.js';
import React from "react";
import Eco from "../components/Eco";
import Solar from "../components/Solar";

export default function Home() {
    return (
        <div>
            <Solar />
            <Eco />
            <CoolStuff/>
        </div>
    );
}
