import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderOne from './components/HeroSliderOne';
import ServiceGridSlider from './components/ServiceGridSlider';
import VideoCta from './components/VideoCta';
/* import ProjectSlider from './components/ProjectSlider';
import TestimonialSlider from './components/TestimonialSlider'; */
import BrandLogoSlider from './components/BrandLogoSlider';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import {Helmet} from "react-helmet";

class HomeOne extends Component{
    render(){
        
        return(
            <div>
                <Helmet>
                <meta charSet="utf-8" />
                <title>СТРОЙ СИТИ ГРУПП | Строительная компания в Ялте</title>
                <meta name="description" content="Строительство и ремонт помещений в Ялте по современным технологиям, с использованием качественных материалов" />                
                </Helmet>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                
                {/* Service grid slider */}
                <ServiceGridSlider/>     
                
                {/* Video CTA */}
                <VideoCta/>
                
                {/* Project Slider */}
                {/* <ProjectSlider/> */}                
                
                {/* Testimonial Slider */}
                {/* <TestimonialSlider/>  */}               

                {/* Brand logo */}
                <BrandLogoSlider background = "" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default HomeOne;