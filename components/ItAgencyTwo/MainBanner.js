import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

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
                <div className="hero-banner it-banner overly hero-bg14 bg-fixed">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <h1>IT agency</h1>
                                                
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
                                        <div className="animate-banner-image">
                                            <img src="/images/animate-banner-img2.jpg" alt="Animate image" />
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