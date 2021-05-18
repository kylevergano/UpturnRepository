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