import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo';
import CtaArea from '../components/Common/CtaArea';
import Footer from '../components/Layouts/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Services Style 2" 
                    BGImage="bg-two"
                />  

                <ServicesStyleTwo />

                <CtaArea />

                <Footer />
            </>
        );
    }
}

export default Services2;