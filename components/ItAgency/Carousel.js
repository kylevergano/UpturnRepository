import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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

class Carousel extends Component {

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
                    
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                              <div className="service-style-two ptb-100">
                                              <div className="container">
                                                  <div className="row align-items-center">
                                                      <div className="col-lg-6">
                                                          <div className="service-left-img">
                                                              <img src="/images/services/solutionfront.png" alt="Service Image" />
                                                          </div>
                                                      </div>
                          
                                                      <div className="col-lg-6">
                                                        
                                                              <div className="info-head">
                                                                  <h2 style={{color:"#0057A5", fontSize:"40px"}}>Adopting Climate-Smart Agriculture practices or climate-smart intervention...</h2>
                                                                 
                                                              </div>
                          
                                                              <div className="row">
                                                                  <div className="col-sm-8">
                                                                  <div className="single-footer-widget">
                                   
                                                                <ul className="get-in-touch">
                                                                    <li className="featured-icon-list-li">
                                                                        <i><img src="/images/icons/featured/rainfall.png" alt="Service Image" /></i>Rainfall Variability, Rising Land Tem...
                                                                    </li>
                                                                    <li className="featured-icon-list-li">
                                                                        <i><img src="/images/icons/featured/agriculture.png" alt="Service Image" /></i> Agriculture
                                                                    </li>
                                                                    <li className="featured-icon-list-li">
                                                                        <i><img src="/images/icons/featured/location.png" alt="Service Image" /></i> Sultan Kudarat
                                                                    </li>
                                                                </ul>
                                                             </div>
                                                                  </div>
                                                              </div>
                          
                                                              {/* <div className="service-read-more">
                                                                  <Link href="/service-details">
                                                                      <a className="btn btn-primary">
                                                                          <i className="icofont-tasks"></i> Read more
                                                                      </a>
                                                                  </Link>
                                                              </div> */}
                                                        
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                        )}
                                    </VisibilitySensor>
                                    
                                                    
                                </div>
                                </div>
                                </div>

                                <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                              <div className="service-style-two ptb-100">
                                              <div className="container">
                                                  <div className="row align-items-center">
                                                      <div className="col-lg-6">
                                                          <div className="service-left-img">
                                                              <img src="/images/static/solution2.png" alt="Service Image" />
                                                          </div>
                                                      </div>
                          
                                                      <div className="col-lg-6">
                                                        
                                                              <div className="info-head">
                                                                  <h2 style={{color:"#0057A5", fontSize:"40px"}}>Las Kuatras Marias - Integrated Siversified Organic System</h2>
                                                                 
                                                              </div>
                          
                                                              <div className="row">
                                                                  <div className="col-sm-8">
                                                                  <div className="single-footer-widget">
                                   
                                                                <ul className="get-in-touch">
                                                                    <li className="featured-icon-list-li">
                                                                        <i><img src="/images/icons/featured/rainfall.png" alt="Service Image" /></i>Rainfall Variability, Rising Land Tem...
                                                                    </li>
                                                                    <li className="featured-icon-list-li">
                                                                        <i><img src="/images/icons/featured/agriculture.png" alt="Service Image" /></i> Agriculture
                                                                    </li>
                                                                    <li className="featured-icon-list-li">
                                                                        <i><img src="/images/icons/featured/location.png" alt="Service Image" /></i> Sultan Kudarat
                                                                    </li>
                                                                </ul>
                                                             </div>
                                                                  </div>
                                                              </div>
                          
                                                              {/* <div className="service-read-more">
                                                                  <Link href="/service-details">
                                                                      <a className="btn btn-primary">
                                                                          <i className="icofont-tasks"></i> Read more
                                                                      </a>
                                                                  </Link>
                                                              </div> */}
                                                        
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                        )}
                                    </VisibilitySensor>
                                    
                                                    
                                </div>
                                </div>
                                </div>

                                <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                              <div className="service-style-two ptb-100">
                                              <div className="container">
                                                  <div className="row align-items-center">
                                                      <div className="col-lg-6">
                                                          <div className="service-left-img">
                                                              <img src="/images/static/solution3.png" alt="Service Image" />
                                                          </div>
                                                      </div>
                          
                                                      <div className="col-lg-6">
                                                        
                                                              <div className="info-head">
                                                                  <h2 style={{color:"#0057A5", fontSize:"40px"}}>Climate Change Resilient Pilot House (CCRPH)</h2>
                                                                 
                                                              </div>
                          
                                                              <div className="row">
                                                                <div className="col-sm-8">
                                                                  <div className="single-footer-widget">
                                   
                                                                        <ul className="get-in-touch">
                                                                            <li className="featured-icon-list-li">
                                                                                <i><img src="/images/icons/featured/rainfall.png" alt="Service Image" /></i>Rainfall Variability, Rising Land Tem...
                                                                            </li>
                                                                            <li className="featured-icon-list-li">
                                                                                <i><img src="/images/icons/featured/agriculture.png" alt="Service Image" /></i> Agriculture
                                                                            </li>
                                                                            <li className="featured-icon-list-li">
                                                                                <i><img src="/images/icons/featured/location.png" alt="Service Image" /></i> Sultan Kudarat
                                                                            </li>
                                                                        </ul>
                                                                  </div>
                                                                </div>
                                                              </div>
                          
                                                              {/* <div className="service-read-more">
                                                                  <Link href="/service-details">
                                                                      <a className="btn btn-primary">
                                                                          <i className="icofont-tasks"></i> Read more
                                                                      </a>
                                                                  </Link>
                                                              </div> */}
                                                        
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                        )}
                                    </VisibilitySensor>
                                    
                                                    
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

export default Carousel;