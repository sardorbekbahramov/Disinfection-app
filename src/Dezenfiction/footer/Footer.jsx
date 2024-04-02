import React from "react";
import logo from "../assets/mainlogo1.png";
import {Col, Row} from "antd";
import {ArrowRightOutlined, PhoneOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocation} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const {t} = useTranslation();
    return (
        <section className=" pb-12">
            <hr className="mt-20 mb-20 footer_line"/>
            <div className="container">
                <Row>
                    <Col lg={8} sm={24} xs={24}>
                        <div className="logo">
                            <img className="logo-img-footer" src={logo} alt="Error"/>
                        </div>
                    </Col>
                    <Col lg={8} sm={24} xs={24} data-aos="fade-right">
                        <div className=" flex items-center" >
                            <div className="locate">
                                <span className="text-[20px] text-red-500"><FontAwesomeIcon icon={faLocation}/></span>
                            </div>
                            <span className="foter-text">{t('manzil')}</span>
                            <p  className=" text-[20px] mt-7 text-gray-900 cursor-pointer">   <ArrowRightOutlined/></p>
                        </div>

                        <div className=" flex items-center" >
                            <div className="locate">
                                <span className=" text-[20px] text-red-500"><PhoneOutlined/></span>
                            </div>
                            <span  className="foter-text">+998 (77) 217 18 18</span>
                            <p className=" text-[20px] mt-7 text-gray-900 cursor-pointer">   <ArrowRightOutlined/></p>
                        </div>
                    </Col>
                </Row>

            </div>
        </section>
    )
}

export default Footer;