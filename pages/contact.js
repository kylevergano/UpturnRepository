import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Contact Us" 
                    BGImage="bg-one"
                />  

                <ContactInfo />
                
                <ContactForm />

                <div className="ptb-100">
                    <Newsletter />
                </div>

                <Footer/>
            </>
        );
    }
}

export default Contact;