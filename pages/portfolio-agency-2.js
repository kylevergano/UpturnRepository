import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/PortfolioAgencyTwo/MainBanner';
import OurWorks from '../components/PortfolioAgencyTwo/OurWorks';
import Feedback from '../components/Common/Feedback';
import TeamStyleThree from '../components/Common/TeamStyleThree';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';

class PortfolioAgency2 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <OurWorks />

                <Feedback />
                
                <TeamStyleThree />
                
                <div className="pb-100">
                    <Newsletter />
                </div>

                <Footer />
            </>
        );
    }
}

export default PortfolioAgency2;