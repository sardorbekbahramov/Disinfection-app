import React, {useState, useEffect} from "react";
import logo from "../assets/mainlogo1.png"
import {Select,Drawer} from 'antd';
import {MenuOutlined} from "@ant-design/icons";
import { useTranslation } from 'react-i18next';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
    const handleChange = (selectedOption) => {
        const selectedLanguage = selectedOption.value;
        i18n.changeLanguage(selectedLanguage);
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <section className="header w-full sticky top-0 z-50">
            <div className={`menu ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="menu-item">
                        <div className="logo cursor-pointer" onClick={() => handleMenuClick("main-section")}>
                            <img className="logo-img" src={logo} alt="Error"/>
                        </div>
                            <div className="menu-item-const menu-item">
                                <div onClick={() => handleMenuClick("main-section")} className="menu-items none-menu" >
                                    <p>{t('header.menu1')}</p>
                                </div>
                                <div onClick={() => handleMenuClick("about-section")} className="menu-items none-menu">
                                    <p>{t('header.menu2')}</p>
                                </div>
                                <div onClick={() => handleMenuClick("services-section")} className="menu-items none-menu" >
                                    <p>{t('header.menu3')}</p>
                                </div>
                            <div onClick={() => handleMenuClick("faq-section")} className="menu-items none-menu" >
                                <p>{t('header.menu4')}</p>
                            </div>
                            <div className="menu-items laungage none-menu">
                                <Select
                                    labelInValue
                                    defaultValue={{
                                        value: 'uzbek',
                                        label: 'Узбекча',
                                    }}
                                    style={{
                                        width: 120,
                                        color: 'black'
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'uzbek',
                                            label: 'Узбекча',
                                        },
                                        {
                                            value: 'russian',
                                            label: 'Руский',
                                        },
                                    ]}
                                />
                            </div>
                            <div onClick={() => handleMenuClick("connect-section")} className="menu-items none-menu" >
                                <button className="connect">{t('header.menu5')}</button>
                            </div>
                        </div>

                        <div className="sidebar-menu none1" onClick={showDrawer}>
                            <MenuOutlined />
                        </div>
                    </div>
                    
                    <Drawer   className="custom-drawer" onClose={onClose} open={open}>
                        <div onClick={() => handleMenuClick("main-section")} className="menu-items ">
                            <p>{t('header.menu1')}</p>
                        </div>
                        <div onClick={() => handleMenuClick("about-section")} className="menu-items">
                            <p>{t('header.menu2')}</p>
                        </div>
                        <div onClick={() => handleMenuClick("services-section")} className="menu-items" >
                            <p>{t('header.menu3')}</p>
                        </div>
                        <div onClick={() => handleMenuClick("faq-section")} className="menu-items" >
                            <p>{t('header.menu4')}</p>
                        </div>
                        <div className="menu-items ">
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: 'uzbek',
                                    label: 'Узбекча',
                                }}
                                style={{
                                    width: 120,
                                    color: 'black'
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'uzbek',
                                        label: 'Узбекча',
                                    },
                                    {
                                        value: 'russian',
                                        label: 'Руский',
                                    },
                                ]}
                            />
                        </div>
                        <div onClick={() => handleMenuClick("connect-section")} className="menu-items" >
                            <button className="connect connect1">{t('header.menu5')}</button>
                        </div>
                    </Drawer>
                </div>
            </div>
        </section>


    )
}

export default Header;