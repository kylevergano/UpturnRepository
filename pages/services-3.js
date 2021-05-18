import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleThree from '../components/Services/ServicesStyleThree';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Services3 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Services Style 3" 
                    BGImage="bg-three"
                />  

                <ServicesStyleThree />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default Services3;