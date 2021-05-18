import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/StudioAgency/MainBanner';
import Services from '../components/StudioAgency/Services';
import OurWorks from '../components/StudioAgency/OurWorks';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import About from '../components/StudioAgency/About';
import Feedback from '../components/Common/Feedback';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class StudioAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Services />

                <OurWorks />

                <FunFactsTwo />

                <About />

                <Feedback />
                
                <LatestNewsSlider />
                
                <CtaAreaTwo />

                <Partner />
                
                <Footer />
            </>
        );
    }
}

export default StudioAgency;