import React from "react";
import {Col, Row} from "antd";
import klapa from "../../images/klapa.webp"
import tarakan from "../../images/tarakan.jpg"
import chayon from "../../images/chayon.jpg"
import kemiruvchi from "../../images/kemiruvchi.jpg"
import burga from "../../images/burga.jpeg"
import odam2 from "../assets/logotype.png"
import page3logo from "../assets/service_logo.png"
import {useTranslation} from "react-i18next";

function ServiceType({handleMenuClick}) {
    const {t} = useTranslation();
    return (
        <section className="service_container">
            <div className="container">
                <p  className="service_type_title  text-[50px] font-bold text-[#020C31]" data-aos="zoom-in">{t('page3.title')}</p>
                <hr />
            <Row className=" flex justify-start items-center ">
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="service_type w-full rounded-md py-2 px-5 h-[450px] mt-5 border border-s-gray-600">
                        <h1 className=" text-[20px] text-gray-900 font-bold">{t('page3.card1.title')}</h1>
                        <p className="service_type_text text-gray-200 text-[19px] mt-5">
                            {t('page3.card1.text')}
                        </p>

                        <div className="service_type_btn flex gap-5 absolute bottom-[30px]">
                            <div onClick={() => handleMenuClick("connect-section")} className="service_type_btn_card mt-auto mr-[15%]"><button className="connect-all_btn service_type_btn_card_item">{t('header.menu5')}</button></div>
                            <div >
                                <img className="service_type_image w-[180px] h-[130px] rounded-[50%] object-cover" src={klapa} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div data-aos="fade-right" className="service_type w-full bg-[#F3F6F6] rounded-md py-2 px-5 h-[450px] mt-5 border border-s-gray-600">
                        <h1 className=" text-[20px] text-gray-900 font-bold">{t('page3.card2.title')}</h1>
                        <p className="service_type_text text-gray-200 text-[19px] mt-5 ">
                            {t('page3.card2.text')}</p>
                        <div className="service_type_btn flex gap-5 absolute bottom-[30px]">
                            <div onClick={() => handleMenuClick("connect-section")} className="service_type_btn_card mt-auto mr-[15%]"><button className="connect-all_btn service_type_btn_card_item">{t('header.menu5')}</button></div>
                            <div>
                                <img className="service_type_image w-[180px] h-[130px] rounded-[50%] object-cover" src={tarakan} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="service_type w-full bg-[#F3F6F6] rounded-md py-2 px-5 h-[450px] mt-5 border border-s-gray-600">
                        <h1 className=" text-[20px] text-gray-900 font-bold">{t('page3.card3.title')}</h1>
                        <p className="service_type_text text-gray-200 text-[19px] mt-5 ">
                            {t('page3.card3.text')}</p>
                        <div className="service_type_btn  flex gap-5 absolute bottom-[30px]">
                            <div onClick={() => handleMenuClick("connect-section")} className="service_type_btn_card mt-auto mr-[15%]"><button className="connect-all_btn service_type_btn_card_item">{t('header.menu5')}</button></div>
                            <div>
                                <img className="service_type_image w-[180px] h-[130px] rounded-[50%] object-cover" src={chayon} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="service_type w-full bg-[#F3F6F6] rounded-md py-2 px-5 h-[450px] mt-5 border border-s-gray-600">
                        <h1 className=" text-[20px] text-gray-900 font-bold">{t('page3.card4.title')}</h1>
                        <p className="service_type_text text-gray-200 text-[19px] mt-5 ">
                            {t('page3.card4.text')}</p>
                        <div className="service_type_btn flex gap-5 absolute bottom-[30px]">
                            <div onClick={() => handleMenuClick("connect-section")} className="service_type_btn_card mt-auto mr-[15%]"><button className="connect-all_btn service_type_btn_card_item">{t('header.menu5')}</button></div>
                            <div>
                                <img className="service_type_image w-[180px] h-[130px] rounded-[50%] object-cover" src={kemiruvchi} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div className="service_type w-full bg-[#F3F6F6] rounded-md py-2 px-5 h-[450px] mt-5 border border-s-gray-600">
                        <h1 className=" text-[20px] text-gray-900 font-bold">{t('page3.card5.title')}</h1>
                        <p className="service_type_text text-gray-200 text-[19px] mt-5 ">
                            {t('page3.card5.text')}</p>
                        <div className="service_type_btn flex gap-5 absolute bottom-[30px]">
                            <div onClick={() => handleMenuClick("connect-section")} className="service_type_btn_card mt-auto mr-[15%]"><button className="connect-all_btn service_type_btn_card_item">{t('header.menu5')}</button></div>
                            <div>
                                <img className="service_type_image w-[180px] h-[130px] rounded-[50%] object-cover" src={burga} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} data-aos="fade-right">
                    <div data-aos="fade-right" className="service_type w-full bg-[#F3F6F6] rounded-md py-2 px-5 h-[450px] mt-5 border border-s-gray-600">
                        <h1 className=" text-[20px] text-gray-900 font-bold">{t('page3.card2.title')}</h1>
                        <p className="service_type_text text-gray-200 text-[19px] mt-5 ">
                            {t('page3.card2.text')}</p>
                        <div className="service_type_btn flex gap-5 absolute bottom-[30px]">
                            <div onClick={() => handleMenuClick("connect-section")} className="service_type_btn_card mt-auto mr-[15%]"><button className="connect-all_btn service_type_btn_card_item">{t('header.menu5')}</button></div>
                            <div>
                                <img className="service_type_image w-[180px] h-[130px] rounded-[50%] object-cover" src={tarakan} alt="Error"/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="service_type_banner">
                <Row>
                    <Col lg={12} md={11} sm={24} xs={24}>
                        <img className="service_type_banner_image" data-aos="fade-right" src={odam2} alt="Error"/>
                    </Col>
                    <Col lg={12} md={24} sm={24}>
                        <div className="service_type_banner_content">
                            <img  src={page3logo} alt="Error" data-aos="fade-right"/>
                            <p className="service_type_banner_content_title" data-aos="fade-right">{t('page3.backg.text')}</p>
                            <div onClick={() => handleMenuClick("connect-section")} data-aos="fade-right"><button className="connect-all_btn service_type_banner_content_btn">{t('header.menu5')}</button></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </section>
    )
}

export default ServiceType;