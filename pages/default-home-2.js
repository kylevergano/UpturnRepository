import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/DefaultHomeTwo/MainBanner';
import Services from '../components/DefaultHomeTwo/Services';
import About from '../components/DefaultHomeTwo/About';
import OurWorks from '../components/DefaultHomeTwo/OurWorks';
import Feedback from '../components/Common/Feedback';
import Team from '../components/Common/Team';
import FunFacts from '../components/Common/FunFacts';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WorkProcess from '../components/DefaultHomeTwo/WorkProcess';

class DefaultHome2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <Services />

                <About />

                <OurWorks />

                <WorkProcess />

                <Feedback />

                <Team />

                <FunFacts />

                <LatestNewsSlider />

                <CtaArea />

                <Partner />
                
                <Footer />
            </>
        );
    }
}

export default DefaultHome2;