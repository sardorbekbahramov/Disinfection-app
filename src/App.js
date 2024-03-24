import React, { useEffect } from 'react';
import Dezenfection from "./Dezenfiction/Dezenfiction";
import "./Dezenfiction/desenfection.css"
import 'animate.css';
import Page1 from "./Dezenfiction/page1";
import Page2 from "./Dezenfiction/page2";
import Page3 from "./Dezenfiction/page3";
import Page4 from "./Dezenfiction/page4";
import FoterPage from "./Dezenfiction/foter-page";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(()=>{
        AOS.init({
            duration: 600, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing type
            offset: 200, // Offset (in pixels) from the bottom of the window when triggering animations
        });

    },[])
      return (
        <React.Fragment>
            <Dezenfection/>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <FoterPage/>
        </React.Fragment>
    )
}

export default App;
