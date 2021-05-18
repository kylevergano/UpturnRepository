import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/StudioAgencyTwo/MainBanner';
import Services from '../components/StudioAgencyTwo/Services';
import OurWorks from '../components/StudioAgencyTwo/OurWorks';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import About from '../components/StudioAgencyTwo/About';
import Feedback from '../components/Common/Feedback';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class StudioAgency2 extends Component {
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

export default StudioAgency2;