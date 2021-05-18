import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleFour from '../components/Services/ServicesStyleFour';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Services4 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Services Style 4" 
                    BGImage="bg-four"
                />  

                <ServicesStyleFour />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Services4;