import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import {Helmet} from "react-helmet";
import axios from 'axios';

class Contact extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            con_name: '',
            con_email: '',           
            con_message: '',
            //mailSent: false,
           // error: null
        };        
      }
      
      
      onChange = (e) => {        
        this.setState({ [e.target.name]: e.target.value });
      }
      

      onSubmit = (e) => {
        e.preventDefault();
        
        const { con_name, con_email, con_message } = this.state;

        const data = {
            service_id: 'gmail',
            template_id: 'template_cQw0qIn1',
            user_id: 'user_ExcPumNz3gi7BoDOOsxv0',
            template_params: {
                con_name,
                con_email,
                con_message
            }
        };
        
        const url = 'https://api.emailjs.com/api/v1.0/email/send';        
        
        if (con_email !== '') {
        axios.post(url, data)
            .then(function (response) {                 
                console.log(response);
                alert("Сообщение отправлено")
          })
          .catch(function (error) {
            console.log(error);
          });
        } else {
            console.log('err');
            alert("Введите email или номер телефона")
        }
          
          this.setState({
            con_name: '',
            con_email: '',           
            con_message: ''
        });
      }
    
    render() { 
        const { con_name, con_email, con_message } = this.state;              
        return (
            <div>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Контактная информация компании "СТРОЙ СИТИ ГРУПП" | Карта проезда, адрес, телефон</title>
                <meta name="description" content="Контакты организации, карта с указанием адреса офиса, контактный телефон, электронная почта" />                
                </Helmet>
                {/* Navigation bar */}
                <NavBar />

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Контакты</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Главная</a></li>
                                        <li>Контакты</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  content page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                    {/*Contact section start*/}
                    <div className="conact-section">
                        <div className="container">
                            <div className="row section-space--bottom--50">
                                <div className="col">
                                    <div className="contact-map">
                                        <iframe title="yandex" src="https://yandex.ru/map-widget/v1/-/CGeljPJq" width="560" height="400" frameBorder="1" allowFullScreen="{true}"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-12">
                                    <div className="contact-information">
                                        <h3>Контактная информация</h3>
                                        <ul>
                                            <li>
                                                <span className="icon"><i className="ion-android-map" /></span>
                                                <span className="text"><span>Республика Крым, г. Ялта, ул. Садовая д. 11, цокольный этаж, офис 1-4</span></span>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                                <span className="text"><a href="tel:+79186714835">+7(918) 671 48 35</a></span>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="ion-ios-email-outline" /></span>
                                                <span className="text"><a href="mailto:info@mmg.group">info@mmg.group</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <div className="contact-form">
                                        <h3>Оставьте ваше сообщение</h3>                                        
                                        <form id="contact-form" onSubmit={this.onSubmit}>
                                            <div className="row row-10">
                                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_name" type="text" placeholder="Имя" value={con_name}
    onChange={this.onChange} /></div>
                                                <div className="col-md-6 col-12 section-space--bottom--20"><input name="con_email" type="text" placeholder="Email или телефон" value={con_email}
    onChange={this.onChange} /></div>
                                                <div className="col-12"><textarea name="con_message" placeholder="Сообщение" value={con_message}
    onChange={this.onChange} /></div>
                                                <div className="col-12"><button type="submit" >ОТПРАВИТЬ</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Contact section end*/}
                </div>
                {/*====================  End of content page content  ====================*/}

                {/* Footer */}
                <Footer />

                {/* Mobile Menu */}
                <MobileMenu />                
            </div>
        )
    }
}


export default Contact;