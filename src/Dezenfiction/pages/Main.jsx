import React from "react";
import {Col, Row} from "antd";
import {useTranslation} from "react-i18next";

function Main({handleMenuClick}) {
    const {t} = useTranslation();

     return (
        <div className="container" id="main-section">
            <div className="main">
                <Row>
                    <Col lg={12} md={24} sm={24} xs={24} className=" relative">
                        <div className="mobile-info relative left-[100px]">
                            <p className="main-text" data-aos="fade-right">
                                {t('page1.title')}
                            </p>
                            <div className="main-info">
                                <p className="main-infotext " data-aos="fade-right">
                                    {t('page1.text')}
                                </p>
                            </div>
                            <div data-aos="fade-right" onClick={() => handleMenuClick("connect-section")}>
                                <button className="connect-all relative top-5">{t('header.menu5')}</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Main;
