import React from 'react';
import { Col, Row} from "antd";
import {ThunderboltOutlined} from "@ant-design/icons";
import hashorat from "../../images/hashorat.png"
import sichqon from "../../images/sichqon.png"
import virus from "../../images/virus.png"
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

function About({handleMenuClick}) {
    const {t} = useTranslation();
    return (
        <section className='about'>
            <div className="container" id="about-section">
                <h2 data-aos="fade-right" className="about_title text-gray-900 text-[34px] font-bold capitalize mb-0">
                    {t('page2.title')}
                </h2>
                <hr/>
                <Row>
                    <Col lg={8} sm={24} md={24} xs={24} >
                        <div className=' about_card' data-aos="fade-left" >
                            <div className=" text-[50px] text-red-600 text-center"><ThunderboltOutlined/></div>
                            <div className="about_card_title text-gray-900 text-[30px] font-bold capitalize mb-0">{t('page2.card1.title')}</div>
                            <p className="about_card_text text-gray-400 text-[14px] mt-3">{t('page2.card1.text')}</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={24} md={24} xs={24}>
                        <div className=' about_card' data-aos="fade-right">
                            <div className=" text-[50px] text-red-600 text-center"> <FontAwesomeIcon icon={faBookmark} /></div>
                            <div className="about_card_title text-gray-900 text-[30px] font-[700] capitalize mb-0">{t('page2.card2.title')}</div>
                            <p className="about_card_text text-gray-400 text-[14px] mt-3">{t('page2.card2.text')}</p>
                        </div>
                    </Col>
                    <Col lg={8} sm={24} md={24} xs={24}>
                        <div className=' about_card' data-aos="fade-left">
                            <div className=" text-[50px] text-red-600 text-center"><FontAwesomeIcon icon={faHandshake}/></div>
                            <div className="about_card_title text-gray-900 text-[30px] font-[700] capitalize mb-0">{t('page2.card3.title')}</div>
                            <p className="about_card_text text-gray-400 text-[14px] mt-3">{t('page2.card3.text')}</p>
                        </div>
                    </Col>
                </Row>

                <div className="about_main_image">
                    <div className=" p-5 about_content">
                        <Row>
                            <Col lg={12}></Col>
                            <Col lg={12}>
                                <p className="about_content_title max-w-[900px] text-[#fafafa] text-[50px] font-bold mb-5 " data-aos="fade-left">{t('page2.backg.title')}</p>
                                <div>
                                    <div>
                                        <p  className="about_content_text max-w-[310px] text-white text-[16px] mb-[60px]" data-aos="fade-right">{t('page2.backg.text')}</p>
                                    </div>
                                    <div data-aos="fade-right" onClick={() => handleMenuClick("connect-section")}>
                                        <button className="connect-all">{t('header.menu5')}</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="container" id="services-section">
                <h2 className="about_title text-gray-900 text-[34px] font-bold capitalize mb-0 mt-7" data-aos="zoom-in">{t('page2.xizmat.title')}</h2>
                <p data-aos="fade-right" className=' text-[#666] text-[2px] max-w-[340px]'>{t('page2.xizmat.text')}</p>
                
                <div className= "about_service px-[10px] py-6 border border-s-gray-700 mb-8 rounded-md" data-aos="fade-right">
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <img className="about_service_image rounded-[50%]" src={hashorat} alt="Error"/>
                        </Col>
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <p className='about_service_title text-gray-900 text-[30px] font-[700] capitalize mb-0'>{t('page2.xizmat.card1.title')}</p>
                            <p className="about_service_text text-[#666] text-[20px]">
                                {t('page2.xizmat.card1.text')}
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="about_service px-[10px] py-6 border border-s-gray-700 mb-8 rounded-md" data-aos="fade-right" >
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <img className="about_service_image rounded-[50%]" src={sichqon} alt="Error"/>
                        </Col>
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <p className='about_service_title text-gray-900 text-[30px] font-[700] capitalize mb-0'>{t('page2.xizmat.card2.title')}</p>
                            <p
                                className="about_service_text text-[#666] text-[20px]"
                            >
                                {t('page2.xizmat.card2.text')}
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className="about_service px-[10px] py-6 border border-s-gray-700 mb-8 rounded-md" data-aos="fade-right" >
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <img className="about_service_image rounded-[50%]" src={virus} alt="Error"/>
                        </Col>
                        <Col lg={18} md={18} sm={24} xs={24}>
                            <p className='about_service_title text-gray-900 text-[30px] font-[700] capitalize mb-0'>{t('page2.xizmat.card3.title')}</p>
                            <p
                                className="about_service_text text-[#666] text-[20px]"
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

export default About;