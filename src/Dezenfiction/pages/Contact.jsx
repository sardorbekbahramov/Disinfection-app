import React, {useEffect, useState} from "react";
import {Col, Form, Input, Row, message} from "antd";
import {CloseOutlined, DownOutlined, UpOutlined} from "@ant-design/icons";
import dezinodam from "../assets/icon1.png"
import congrats from "../../images/congrats.jpg"
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

    const data = [
        {
          cover: <i className='fa-solid fa-truck-fast'></i>,
          title: "Доставка по всему миру",
          decs: "У нас конкурентные цены на более 100 миллионов единиц данного товара.",
        },
        {
          cover: <i className='fa-solid fa-id-card'></i>,
          title: "Безопасная оплата",
          decs: "У нас конкурентные цены на более 100 миллионов единиц данного товара.",
        },
        {
          cover: <i className='fa-solid fa-shield'></i>,
          title: "Покупайте с уверенностью ",
          decs: "У нас конкурентные цены на более 100 миллионов единиц данного товара.",
        },
        {
          cover: <i className='fa-solid fa-headset'></i>,
          title: "Поддержка 24/7",
          decs: "У нас конкурентные цены на более 100 миллионов единиц данного товара.",
        },
      ]

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
                <hr className=" mt-20"/>
                <Row>
                    <Col lg={6} md={24}>
                        <h1 className="contact_faq_title text-[#020c31] text-[48px] font-bold"> {t('page4.title')}</h1>
                    </Col>
                    <Col lg={18} md={24}>
                        {faqData.map((item, index) => (
                            <div key={index}>
                                <Row>
                                    <Col lg={22}>
                                        <p onClick={() => onClick(index)} className="contact_faq_question_text text-[#676d83] text-[30px] font-bold cursor-pointer px-0 py-8">{item.question}</p>
                                        <p className={`contact_faq_question_text-element text-[#676d83] text-[24px] max-h-0 ${clicks[index] ? 'show-answer' : 'hide-answer'}`}>{item.answer}</p>
                                    </Col>
                                    <Col lg={2}>
                                        <div onClick={() => onClick(index)} className="contact_faq_question_icon">
                                            <span className=" text-[#020c31] text-[25px]">{clicks[index] ? <DownOutlined/> : <UpOutlined />} </span>
                                        </div>
                                    </Col>
                                </Row>
                                <hr/>
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>

            <div className="wrapper background">
                <div  className="container grid2">
                    {
                        data.map((item, index)=> {
                            return(
                                <>
                                    <div data-aos="zoom-in" className="product" key={index}>
                                        <div className="img icon-circle">
                                            <span className='wrapper_icon text-red-600'>{item.cover}</span>
                                        </div>
                                        <h3 className=" text-[20px] font-bold">{item.title}</h3>
                                        <p>{item.decs}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container" id="connect-section">
                <div className="contact_form_bg  h-[550px] rounded-md flex items-center relative py-0 px-6 mt-[60px] justify-around">
                    <div className="contact_form_card w-[400px] max-w-[700px] min-h-[385px] bg-white rounded-md py-0 px-5 my-0 mx-[50px]" data-aos="zoom-in">
                        <p className="contact_form_card_title text-gray-900 text-[20px] mt-4 font-bold mb-5 text-center">{t('page4.form.title')}</p>
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
                                <Input placeholder={t('page4.form.name')} className=" h-[54px] bg-[#F2F2F2]"/>
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
                                <Input placeholder="+998-90-866-60-51" className=" h-[54px] bg-[#F2F2F2]"/>
                            </Form.Item>

                            <Form.Item>
                                <button className="contact_form_card_btn flex w-full items-center justify-center h-[50px] border-none outline-none rounded-md bg-[#242825] font-semibold text-white text-[16px] cursor-pointer mt-[50px]  " type="primary" htmlType="submit">{t('page4.form.submit')}</button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="contact_form_card_banner none">
                        <img className="contact_form_card_banner_img w-[270px] h-[390px] rounded-md object-cover" src={dezinodam} alt="Error"/>
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
