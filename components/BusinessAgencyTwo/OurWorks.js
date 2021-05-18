import React, { Component } from 'react';
import Link from 'next/link';

class OurWorks extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg1 text-center">
                                    <div className="content">
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
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">View Case Study</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape1.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg2 text-center">
                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio">
                                                <a>Development</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Building design process within teams</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">View Case Study</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape2.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg3 text-center">
                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio">
                                                <a>Development</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>How intercom brings play into their design process</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">View Case Study</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape3.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg4 text-center">
                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio">
                                                <a>Development</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Stuck with to-do list, I created a new app for myself</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">View Case Study</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape4.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg5 text-center">
                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio">
                                                <a>Development</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Examples of different types of sprints</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">View Case Study</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape5.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg6 text-center">
                                    <div className="content">
                                        <span>
                                            <Link href="/portfolio">
                                                <a>Development</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href="/portfolio-details">
                                                <a>Redesigning the New York times app</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <Link href="/portfolio-details">
                                        <a className="btn btn-primary">View Case Study</a>
                                    </Link>

                                    <div className="shape">
                                        <img src="/images/case-studies/studie-shape6.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="view-more-work">
                            <Link href="/portfolio">
                                <a className="btn btn-primary">View More Work</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurWorks;