import React, { Component } from 'react';
import NavbarTwo from '../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/Layouts/Footer';
import SolutionMain from './Components/SolutionMain1';


class Solutions extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                {/* <PageBanner 
                    pageTitle="Blog Left Sidebar" 
                    BGImage="bg-five"
                />   */}

                <SolutionMain />
                
                <Footer/>
            </>
        );
    }
}

export default Solutions;