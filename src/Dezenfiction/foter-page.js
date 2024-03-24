import React from "react";
import logo from "../images/logo.png";
import {Col, Row} from "antd";
import {ArrowRightOutlined, PhoneOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocation} from '@fortawesome/free-solid-svg-icons';

function FoterPage() {
    const {t} = useTranslation();
    return (
        <section style={{paddingBottom: '50px'}}>
            <hr style={{marginTop: '70px', marginBottom: '70px'}}/>
            <div className="container">
                <Row>
                    <Col lg={8} sm={24} xs={24}>
                        <div className="logo">
                            <img className="logo-img" src={logo} alt="Error"/>
                        </div>
                    </Col>
                    <Col lg={8} sm={24} xs={24}>
                        <div style={{display: 'flex', alignItems: 'center'}} data-aos="fade-right">
                            <div className="locate">
                                <span style={{fontSize: '20px'}}><FontAwesomeIcon icon={faLocation}/></span>
                            </div>
                            <span className="foter-text">{t('manzil')}</span>
                            <a
                                href="https://www.google.com/maps/place/IT+Time+Academy/@41.3383854,69.2857248,15z/data=!4m14!1m7!3m6!1s0x38ae8b4e3088e9bf:0xdd9a89a16d423604!2sIT+Time+Academy!8m2!3d41.3383854!4d69.2857248!16s%2Fg%2F11y1mn0hrz!3m5!1s0x38ae8b4e3088e9bf:0xdd9a89a16d423604!8m2!3d41.3383854!4d69.2857248!16s%2Fg%2F11y1mn0hrz?entry=ttu" target="_blank"
                                style={{fontSize: '20px', marginTop: "25px",color:'black'}}>   <ArrowRightOutlined/></a>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center'}} data-aos="fade-right">
                            <div className="locate">
                                <span style={{fontSize: '20px'}}><PhoneOutlined/></span>
                            </div>
                            <span  className="foter-text">+998 90 866 60 51</span>
                            <a href="tel:+998908666051" style={{fontSize: '20px', marginTop: "25px" ,color:'black'}}>   <ArrowRightOutlined/></a>
                        </div>
                    </Col>
                </Row>

            </div>
        </section>
    )
}

export default FoterPage;