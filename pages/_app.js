import '../public/css/bootstrap.min.css';
import 'animate.css';
import '../public/css/icofont.min.css';
import '../public/css/pe-icon-7-stroke.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';

import '../public/signIn.css'
// import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import {useEffect} from 'react';
import {useRouter} from 'next/router'

import { ChakraProvider } from "@chakra-ui/react"
import {firebase} from '../firebase';



export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
        
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props
        
        return (
            <>
            {/* <ChakraProvider>           */}
                {/*user ? <Component {...pageProps} /> : "no user signed in" 
                <AuthProvider>
                 <Component {...pageProps} />
                </AuthProvider>
                */}
                <Component {...pageProps} />
                
                {/* Preloader */}
                {/* <Loader loading={this.state.loading} /> */}

                {/* Go Top Button */}
                <GoTop />
            {/* </ChakraProvider> */}
            </>
        );
    }
}