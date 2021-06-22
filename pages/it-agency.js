import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import Carousel from '../components/ItAgency/Carousel';
import WhatIsUpturn from '../components/ItAgency/WhatIsUpturn';
import OurServices from '../components/ItAgency/OurServices';
import ServiceStyleTwo from '../components/ItAgency/ServiceStyleTwo';
import WhyChooseUs from '../components/ItAgency/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Feedback from '../components/Common/Feedback';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Partner from '../components/Common/Partner';
import RightSolutions from '../components/ItAgency/FunFactsTwo';
import FooterSignup from '../components/ItAgency/FooterSignup';

class ItAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <MainBanner /> 

                <Carousel /> 

                <WhatIsUpturn />

                {/* <OurServices -- />

                <ServiceStyleTwo />

                <WhyChooseUs /> */}

                <RightSolutions />

                {/* <Partner />

                <Feedback />

                <TeamStyleTwo />

                <PricingStyleThree /> 
                
                <LatestNewsSliderTwo /> */}
{/* 
                <div className="pb-100">
                    <Newsletter />
                </div> */}
                {/* <FooterSignup /> */}
                <Footer />
            </>
        );
    }
}

export default ItAgency;