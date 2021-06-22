import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';


class WhatIsUpturn extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner startup-agency" style={{marginTop:"-100px;"}}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <h1><span style={{display:"block"}}><span style={{color:"black"}}>What is </span><span style={{color:"#0057A5"}}>Project </span><span style={{color:"#F5B100"}}>Upturn?</span></span></h1>
                                            <p>LGU planners and implementers are experiencing difficulty in finding appropriate solutions on climate change that they can implement here in the Philippines. This challenge hinders them from implementing projects effectively and efficiently.</p>
                                            <p><b>Project Upturn is a free, comprehensive, and easy-to-use platform</b> designed to help LGU planners and implementers craft and execute innovative projects and solutions for climate change adaptation and mitigation.</p>

                                            <Link href="/contact">
                                                <a className="btn btn-primary">Learn More</a>
                                            </Link>

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner-image">
                                            <img src="/images/static/Whatisupturn.png" alt="image" />
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

export default WhatIsUpturn;