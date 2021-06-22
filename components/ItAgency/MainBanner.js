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
                <div className="hero-banner hero-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center" style={{textAlign:"center"}}>
                                 
                                  
                                            <h1 style={{color:"white"}}>Real solutions for real climate problems</h1>
                                                
                                            <p style={{color:"white"}}>Find tested and science-based solutions for climate change challenges in your local community</p>
                                        
                                   

                                          
                                     
                                   
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