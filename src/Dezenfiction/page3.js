import React from "react";
import {Col, Row} from "antd";
import klapa from "../images/klapa.webp"
import tarakan from "../images/tarakan.jpg"
import chayon from "../images/chayon.jpg"
import kemiruvchi from "../images/kemiruvchi.jpg"
import burga from "../images/burga.jpeg"
import odam2 from "../images/odam2.jpg"
import page3logo from "../images/page3logo.png"
import {useTranslation} from "react-i18next";

function Page3({handleMenuClick}) {
    const {t} = useTranslation();
    return (
        <div className="container">
            <p style={{fontSize: '50px', fontFamily: 'Unbounded', fontWeight: 'bold',color:'#020C31'}} data-aos="zoom-in">{t('page3.title')}</p>
            <Row>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="page3-xizmat">
                        <h1>{t('page3.card1.title')}</h1>
                        <p className="page3-text">
                            {t('page3.card1.text')}
                        </p>
                        <div className="page3-type">
                            <div onClick={() => handleMenuClick("connect-section")} className="element1"><button className="connect-all page-3btn ">{t('header.menu5')}</button></div>
                            <div ><img
                                className="element2" src={klapa} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div data-aos="fade-right" className="page3-xizmat">
                        <h1>{t('page3.card2.title')}</h1>
                        <p className="page3-text">
                            {t('page3.card2.text')}</p>
                        <div className="page3-type">
                            <div onClick={() => handleMenuClick("connect-section")} className="element1"><button className="connect-all page-3btn">{t('header.menu5')}</button></div>
                            <div className="element2"><img
                                className="element2" src={tarakan}
                                alt="Error"/></div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="page3-xizmat">
                        <h1>{t('page3.card3.title')}</h1>
                        <p className="page3-text">
                            {t('page3.card3.text')}</p>
                        <div className="page3-type">
                            <div onClick={() => handleMenuClick("connect-section")} className="element1"><button className="connect-all page-3btn">{t('header.menu5')}</button></div>
                            <div className="element2"><img
                                className="element2" src={chayon}
                                alt="Error"/></div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="page3-xizmat">
                        <h1>{t('page3.card4.title')}</h1>
                        <p className="page3-text">
                            {t('page3.card4.text')}</p>
                        <div className="page3-type">
                            <div onClick={() => handleMenuClick("connect-section")} className="element1"><button className="connect-all page-3btn">{t('header.menu5')}</button></div>
                            <div className="element2"><img
                                className="element2" src={kemiruvchi}
                                alt="Error"/></div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="page3-xizmat">
                        <h1>{t('page3.card5.title')}</h1>
                        <p className="page3-text">
                            {t('page3.card5.text')}</p>
                        <div className="page3-type">
                            <div onClick={() => handleMenuClick("connect-section")} className="element1"><button className="connect-all page-3btn">{t('header.menu5')}</button></div>
                            <div className="element2"><img
                                className="element2" src={burga} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="page3-back">
                <Row>
                    <Col lg={12} md={11} sm={24} xs={24}>
                        <img className="page3-img" data-aos="fade-right" src={odam2} alt="Error"/>
                    </Col>
                    <Col lg={12} md={24} sm={24}>
                        <div className="page3-info">
                            <img  src={page3logo} alt="Error" data-aos="fade-right"/>
                            <p className="page3-title" data-aos="fade-right">
                                {t('page3.backg.text')}
                            </p>
                            <div onClick={() => handleMenuClick("connect-section")} data-aos="fade-right"><button className="connect-all">{t('header.menu5')}</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Page3;