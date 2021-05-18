import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const ModalVideo = dynamic(
    () => import('react-modal-video'),
    {ssr: false}
);
import Particles from 'react-particles-js';

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    items:1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

const particleOpt = {
    particles: {
        number: {
            value: 160,
            density: {
                enable: false
            }
        },
        size: {
            value: 10,
            random: true
        },
        move: {
            direction: "bottom",
            out_mode: "out",
            speed: 2,
        },
        line_linked: {
            enable: false
        }
    },
    interactivity: {
        events: {
            onclick: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse:{
                distance: 200,
                duration: 0.4
            }
        }
    }
}

class MainBanner extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                {this.state.display ? <OwlCarousel 
                className="hero-slider owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="hero-banner overly-6 hero-bg5">
                        <div id="particles-js">
                            <Particles 
                                params={{...particleOpt}}
                            />
                        </div> 

                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Digital Marketing
                                                </h1>
                                                 
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                         
                                                <div 
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="btn btn-primary">Contact Us</a>
                                                    </Link>

                                                    <Link href="/#play-video">
                                                        <a
                                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                                            className="btn btn-secondary"
                                                        > 
                                                            <i className="icofont-ui-play"></i> How it works
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-banner overly-6 hero-bg6">
                        <div id="particles-js">
                            <Particles 
                                params={{...particleOpt}}
                            />
                        </div> 

                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Marketing Startup
                                                </h1>
                                                 
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                         
                                                <div 
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="btn btn-primary">Contact Us</a>
                                                    </Link>

                                                    <Link href="/#play-video">
                                                        <a
                                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                                            className="btn btn-secondary"
                                                        > 
                                                            <i className="icofont-ui-play"></i> How it works
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-banner overly-6 hero-bg7">
                        <div id="particles-js">
                            <Particles 
                                params={{...particleOpt}}
                            />
                        </div> 

                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content text-center">
                                                <h1
                                                className={
                                                    isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Marketing agency
                                                </h1>
                                                 
                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                         
                                                <div 
                                                    className={
                                                        isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="btn btn-primary">Contact Us</a>
                                                    </Link>

                                                    <Link href="/#play-video">
                                                        <a
                                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                                            className="btn btn-secondary"
                                                        > 
                                                            <i className="icofont-ui-play"></i> How it works
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>                
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
 
                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;