import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/CreativeAgency/MainBanner';
import About from '../components/CreativeAgency/About';
import Services from '../components/CreativeAgency/Services';
import OurWorks from '../components/CreativeAgency/OurWorks';
import Feedback from '../components/Common/Feedback';
import WorkProcess from '../components/CreativeAgency/WorkProcess';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import Team from '../components/CreativeAgency/Team';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class CreativeAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />
                
                <About />

                <Services />

                <OurWorks />

                <Feedback /> 

                <WorkProcess />

                <PricingStyleOne /> 

                <Team />

                <FunFactsTwo />

                <LatestNewsSlider />

                <CtaArea />

                <Partner />

                <Footer />
            </>
        );
    }
}

export default CreativeAgency;