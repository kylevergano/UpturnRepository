import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import BlogLeftSidebar from '../components/Blog/BlogLeftSidebar';


class Blog3 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                {/* <PageBanner 
                    pageTitle="Blog Left Sidebar" 
                    BGImage="bg-five"
                />   */}

                <BlogLeftSidebar />
                
                <Footer/>
            </>
        );
    }
}

export default Blog3;