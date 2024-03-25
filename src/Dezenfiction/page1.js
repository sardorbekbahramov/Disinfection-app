import React from "react";
import {Col, Row} from "antd";
import odam from "../images/odam_dezinfiksiya.jpg";
import aparat from "../images/aparat.jpeg";
import {useTranslation} from "react-i18next";

function Page1({handleMenuClick}) {
    const {t} = useTranslation();

     return (
        <div className="container" id="main-section">
            <div className="page1">
                <Row>
                    <Col lg={12} md={24} sm={24} xs={24} style={{position: 'relative'}}>
                        <div className="mobile-info">
                            <p className="page1-text" data-aos="fade-right">
                                {t('page1.title')}
                            </p>
                            <div className="page1-info">
                                <p className="page1-infotext " data-aos="fade-right">
                                    {t('page1.text')}
                                </p>
                                <img className="aparat" style={{width: '45%', marginTop: '-70px'}} src={aparat}
                                     alt="Error"/>
                            </div>
                            <div data-aos="fade-right" onClick={() => handleMenuClick("connect-section")}>
                                <button className="connect-all">{t('header.menu5')}</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={24} sm={24} xs={24}>
                        <img className="page1-img none" src={odam} alt="Error"/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Page1;
