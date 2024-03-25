import React, {useEffect, useState} from "react";
import {Col, Form, Input, Row, message} from "antd";
import {CloseOutlined, DownOutlined, UpOutlined} from "@ant-design/icons";
import dezinodam from "../images/page4-img.webp"
import congrats from "../images/congrats.jpg"
import axios from "axios";
import {useTranslation} from "react-i18next";
function Page4() {
    const [form] = Form.useForm();
    const [clicks, setClicks] = useState(Array(3).fill(false));
    const [showModal, setShowModal] = useState(false);
    const {t} = useTranslation();


    useEffect(() => {
        let modalTimer;
        if (showModal) {
            modalTimer = setTimeout(() => {
                setShowModal(false);
            }, 4000);
        }
        return () => clearTimeout(modalTimer);
    }, [showModal]);

    const onClick = (index) => {
        const newClicks = Array(clicks.length).fill(false);
        newClicks[index] = !clicks[index];
        setClicks(newClicks);
    };

    const onFinish = (values) => {
        const telegram_bot_id = "7010723308:AAGwh3tmHS-uV-Fb-CR_TqHGniLsFGrALmw";
        const chat_id = -1002068078844;
        const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;
        const method = 'POST';
        const name = values.username;
        const phone = values.phonenumber;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone}`;
        axios({
            url: url,
            method: method,
            data: {
                "chat_id": chat_id,
                "text": messageContent
            },
        }).then(res => {
            setShowModal(true)
            form.resetFields();
        }).catch(error => {
            message.error("Xatolik");
        });
    };
    const handleClose = () => {
        setShowModal(false)
        form.resetFields();
    }

    const faqData = [
        {
            question: t('page4.card1.title'),
            answer: t('page4.card1.text'),
        },
        {
            question: t('page4.card2.title'),
            answer: t('page4.card2.text'),
        },
        {
            question: t('page4.card3.title'),
            answer: t('page4.card1.text'),
        }
    ];

    return (
        <section>
            <div className="container" id="faq-section">
                <hr style={{marginTop: '80px'}}/>
                <Row>
                    <Col lg={6} md={24}>
                        <h1 className="page4-title"> {t('page4.title')}</h1>
                    </Col>
                    <Col lg={18} md={24}>
                        {faqData.map((item, index) => (
                            <div key={index}>
                                <Row>
                                    <Col lg={22}>
                                        <p onClick={() => onClick(index)} className="page4-text">{item.question}</p>
                                        <p className={`page4-text-element ${clicks[index] ? 'show-answer' : 'hide-answer'}`}>{item.answer}</p>
                                    </Col>
                                    <Col lg={2}>
                                        <div onClick={() => onClick(index)} className="page4-icon">
                                            <span className="page4-belgi" style={{fontSize: '25px', color: '#020c31'}}>{clicks[index] ? <DownOutlined/> : <UpOutlined />} </span>
                                        </div>
                                    </Col>
                                </Row>
                                <hr/>
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>
            <div className="container" id="connect-section">
                <div className="page4-background">
                    <div className="page4-card" data-aos="fade-right">
                        <p className="card-title">
                            {t('page4.form.title')}
                        </p>
                        <Form
                            form={form}
                            name="basic"
                            style={{
                                maxWidth: 600,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                            footer={null}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: t('page4.form.name')
                                    },
                                ]}
                            >
                                <Input placeholder={t('page4.form.name')}
                                       style={{height: '50px', backgroundColor: '#F2F2F2'}}/>
                            </Form.Item>

                            <Form.Item
                                name="phonenumber"
                                rules={[
                                    {
                                        required: true,
                                        message: t('page4.form.phone'),
                                    },
                                    {
                                        pattern: /^(\+\d{1,3})?(\d{10})$/,
                                        message: t('page4.form.phonetype'),
                                    },
                                ]}
                            >
                                <Input placeholder="+998-90-866-60-51"
                                       style={{height: '50px', backgroundColor: '#F2F2F2'}}/>
                            </Form.Item>

                            <Form.Item>
                                <button className="page4-btn" type="primary" htmlType="submit">
                                    {t('page4.form.submit')}
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="page4-img none">
                        <img className="page4-imgs" src={dezinodam} alt="Error"/>
                    </div>
                </div>
            </div>
            <div>
                {showModal && (
                    <div className="modal-background">
                        <div className="modal-content" onClick={handleClose}>
                            <div className="modal-close">
                                <span style={{
                                    fontSize: '20px',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}><CloseOutlined/></span>
                            </div>
                            <h2 className="modal-title">{t('page4.modal.text')}</h2>
                            <div className="modal-img">
                                <img style={{width: '40%'}} src={congrats} alt="Error"/>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Page4;
