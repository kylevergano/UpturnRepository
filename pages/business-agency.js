import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/BusinessAgency/MainBanner';
import About from '../components/BusinessAgency/About';
import Services from '../components/BusinessAgency/Services';
import OurWorks from '../components/BusinessAgency/OurWorks';
import WorkProcess from '../components/BusinessAgency/WorkProcess';
import Feedback from '../components/Common/Feedback';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import PricingStyleTwo from '../components/Pricing/PricingStyleTwo';
import PartnerTwo from '../components/Common/PartnerTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import LatestNewsSlider from '../components/Common/LatestNewsSliderTwo';
import Footer from '../components/Layouts/Footer';

class BusinessAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <About />

                <Services />
                
                <OurWorks />

                <WorkProcess />

                <Feedback />

                <TeamStyleTwo />

                <PricingStyleTwo />

                <PartnerTwo />

                <CtaAreaTwo />
                
                <LatestNewsSlider />
                
                <Footer />
            </>
        );
    }
}

export default BusinessAgency;