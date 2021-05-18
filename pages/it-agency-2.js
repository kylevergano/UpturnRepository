import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgencyTwo/MainBanner';
import OurServices from '../components/ItAgencyTwo/OurServices';
import ServiceStyleTwo from '../components/ItAgencyTwo/ServiceStyleTwo';
import WhyChooseUs from '../components/ItAgencyTwo/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Feedback from '../components/Common/Feedback';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Partner from '../components/Common/Partner';

class ItAgency2 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner /> 

                <OurServices />

                <ServiceStyleTwo />

                <WhyChooseUs />

                <FunFactsTwo />

                <Partner />

                <Feedback />

                <TeamStyleTwo />

                <PricingStyleThree /> 
                
                <LatestNewsSliderTwo />

                <div className="pb-100">
                    <Newsletter />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default ItAgency2;