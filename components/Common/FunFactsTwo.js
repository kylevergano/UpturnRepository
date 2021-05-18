import React, { Component } from 'react';
import Link from 'next/link';

class FunFactsTwo extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>We always try to understand users expectation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-checked"></i>
                                <h3>980+</h3>
                                <p>Completed Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-ui-love"></i>
                                <h3>950+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-tasks"></i>
                                <h3>780+</h3>
                                <p>Ongoing Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                <i className="icofont-win-trophy"></i>
                                <h3>70+</h3>
                                <p>Winning Awards</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>Have any questions about us?</h3>
                        <p>Don't hesitate to contact us</p>

                        <Link href="/contact">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFactsTwo;