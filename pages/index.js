import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/DefaultHome/MainBanner';
import Services from '../components/DefaultHome/Services';
import About from '../components/DefaultHome/About';
import OurWorks from '../components/DefaultHome/OurWorks';
import Feedback from '../components/Common/Feedback';
import Team from '../components/Common/Team';
import FunFacts from '../components/Common/FunFacts';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WorkProcess from '../components/DefaultHome/WorkProcess';

class Index extends Component {
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

export default Index;