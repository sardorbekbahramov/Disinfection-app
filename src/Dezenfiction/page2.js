import React from 'react';
import { Col, Row} from "antd";
import {ThunderboltOutlined} from "@ant-design/icons";
import hashorat from "../images/hashorat.png"
import sichqon from "../images/sichqon.png"
import virus from "../images/virus.png"
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

function Page2({handleMenuClick}) {
    const {t} = useTranslation();
    return (
        <section>
            <div className="container" id="about-section">
                <h1 data-aos="fade-right" className="page2-text">
                    {t('page2.title')}
                </h1>
                <hr/>
                <Row>
                    <Col lg={8} sm={24} md={24} xs={24} >
                        <div className=' page2-card' data-aos="fade-right" >
                            <div className="page2-icon"><ThunderboltOutlined/></div>
                            <div className="page2-text">{t('page2.card1.title')}</div>
                            <p className="page2-info">{t('page2.card1.text')}</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={24} md={24} xs={24}>
                        <div className=' page2-card' data-aos="fade-right">
                            <div className="page2-icon"> <FontAwesomeIcon icon={faBookmark} /></div>
                            <div className="page2-text">{t('page2.card2.title')}</div>
                            <p className="page2-info">{t('page2.card2.text')}</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={24} md={24} xs={24}>
                        <div className=' page2-card' data-aos="fade-right">
                            <div className="page2-icon"><FontAwesomeIcon icon={faHandshake}/></div>
                            <div className="page2-text">{t('page2.card3.title')}</div>
                            <p className="page2-info">{t('page2.card3.text')}</p>
                        </div>
                    </Col>
                </Row>
                <div className="backimage">
                    <div className="backimage-content">
                        <Row>
                            <Col lg={12}></Col>
                            <Col lg={12}>
                                <p className="page2-info2" data-aos="fade-right">{t('page2.backg.title')}</p>
                                <p  className="page2-text2 " data-aos="fade-right">{t('page2.backg.text')}</p>
                                <div data-aos="fade-right" onClick={() => handleMenuClick("connect-section")}>
                                    <button className="connect-all">{t('header.menu5')}</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="container" id="services-section">
                <h1 className="page2-text" data-aos="zoom-in">{t('page2.xizmat.title')}</h1>
                <p data-aos="fade-right" style={{
                    color: "#666",
                    fontFamily: 'sans-serif',
                    fontSize: '20px',
                    maxWidth: '340px'
                }}>{t('page2.xizmat.text')}</p>
                <div className= "page2-xizmat " data-aos="fade-right">
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <img className="page2-img" src={hashorat} alt="Error"/>
                        </Col>
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <h1>{t('page2.xizmat.card1.title')}</h1>
                            <p
                               className="page2-xizmat-text"
                            >
                                {t('page2.xizmat.card1.text')}
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="page2-xizmat" data-aos="fade-right" >
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <img className="page2-img" src={sichqon} alt="Error"/>
                        </Col>
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <h1>{t('page2.xizmat.card2.title')}</h1>
                            <p
                                className="page2-xizmat-text"
                            >
                                {t('page2.xizmat.card2.text')}
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="page2-xizmat" data-aos="fade-right" >
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <img className="page2-img" src={virus} alt="Error"/>
                        </Col>
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <h1>{t('page2.xizmat.card3.title')}</h1>
                            <p
                                className="page2-xizmat-text"
                            >
                                {t('page2.xizmat.card3.text')}
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default Page2;