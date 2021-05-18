import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/MarketingAgency/MainBanner';
import Services from '../components/MarketingAgency/Services';
import OurWorks from '../components/MarketingAgency/OurWorks';
import Feedback from '../components/Common/Feedback';
import About from '../components/MarketingAgency/About';
import FunFacts from '../components/Common/FunFacts';
import PartnerTwo from '../components/Common/PartnerTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import LatestNews from '../components/Common/LatestNews';
import Footer from '../components/Layouts/Footer';

class MarketingAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Services />

                <OurWorks />

                <Feedback />

                <About />

                <FunFacts />

                <PartnerTwo />
                
                <CtaAreaTwo />

                <div className="ptb-100">
                    <LatestNews />
                </div>

                <Footer />
            </>
        );
    }
}

export default MarketingAgency;