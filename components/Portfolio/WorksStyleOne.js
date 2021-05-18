import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
        1800:{
            items:5
        }
    }
}

class WorksStyleOne extends Component {

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

    render() {
        return (
            <>
                <section className="case-studies-area ptb-100">
                    <div className="container-fluid">
                        <div className="section-title">
                            <h2>Our Projects</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        {this.state.display ? <OwlCarousel 
                        className="work-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="work-card">
                                <img src="/images/works/work1.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Development</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Designing a better cinema experience</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="work-card">
                                <img src="/images/works/work2.jpg" alt="image" />
                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Web Design</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Building design process within teams</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                
                            <div className="work-card">
                                <img src="/images/works/work3.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>eCommerce</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>How intercom brings play eCommerce</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
            
                            <div className="work-card">
                                <img src="/images/works/work4.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Reactjs</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>How to start a project with Reactjs</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                    
                            <div className="work-card">
                                <img src="/images/works/work5.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Angular js</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Examples of different types of sprints</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                
                            <div className="work-card">
                                <img src="/images/works/work6.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>UI/UX Design</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Redesigning the New York times app</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="work-card">
                                <img src="/images/works/work7.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Graphic Design</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Design the Web, Mobile, and eCommerce</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="work-card">
                                <img src="/images/works/work8.jpg" alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="/portfolio">
                                            <a>Bootstrap</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Redesigning the New York times app</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </>
        );
    }
}

export default WorksStyleOne;