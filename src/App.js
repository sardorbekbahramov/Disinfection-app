import React, {useEffect, useState} from 'react';
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
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            offset: 200,
        });

    },[])
    const handleMenuClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        const menuHeight = document.querySelector('.menu').offsetHeight;

        if (section) {
            const offset = section.offsetTop - menuHeight;
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
        setOpen(false)
    };
      return (
        <React.Fragment>
            <Dezenfection/>
            <Page1 handleMenuClick={handleMenuClick}/>
            <Page2 handleMenuClick={handleMenuClick}/>
            <Page3 handleMenuClick={handleMenuClick}/>
            <Page4/>
            <FoterPage/>
        </React.Fragment>
    )
}

export default App;
