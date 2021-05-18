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
            value: 150,
            density: {
                enable: false
            }
        },
        size: {
            value: 5,
            random: true
        },
        move: {
            out_mode: "out",
            speed: 1,
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
                <div className="hero-banner overly clip-path-one hero-bg15 bg-fixed">
                    <div id="particles-js">
                        <Particles 
                            params={{...particleOpt}}
                        />
                    </div> 

                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content text-center">
                                    <h1>Portfolio Agency</h1>
                                        
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                
                            
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