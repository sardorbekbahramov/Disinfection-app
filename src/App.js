import React, {useEffect} from 'react';
import Header from "./Dezenfiction/header/Header";
import "./Dezenfiction/responsive.css"
import 'animate.css';
import Main from "./Dezenfiction/pages/Main";
import About from "./Dezenfiction/pages/About";
import ServiceType from "./Dezenfiction/pages/ServceTypes";
import Page4 from "./Dezenfiction/pages/Contact";
import Footer from "./Dezenfiction/footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
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
    }; 
      return (
        <React.Fragment>
            <Header/>
            <Main handleMenuClick={handleMenuClick}/>
            <About handleMenuClick={handleMenuClick}/>
            <ServiceType handleMenuClick={handleMenuClick}/>
            <Page4/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
