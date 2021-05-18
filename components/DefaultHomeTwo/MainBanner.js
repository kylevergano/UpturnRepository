import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(
    () => import('react-modal-video'),
    {ssr: false}
);
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 160,
            density: {
                enable: false
            },
        },
        "color": {
            "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
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

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner main-banner2 item-bg1">
                    <div id="particles-js">
                        <Particles 
                            params={{...particleOpt}}
                        />
                    </div> 

                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>A Digital Agency</span>
                                            <h1>We're a full-range digital agency.</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <Link href="/contact">
                                                <a className="btn btn-primary">Get Started</a>
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

                                    <div className="col-lg-6">
                                        <div className="banner-animation-image2">
                                            <img 
                                                src="/images/banner-img3.png" 
                                                className="main-pic animate__animated animate__zoomIn animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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