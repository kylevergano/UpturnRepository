import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleThree extends Component {
    render() {
        return (
            <>
                <section className="pricing-area pt-100 pb-70 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>Choose The Pricing Plan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row">
                            {/* Single pricing table */}
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-pricing-table">
                                    <div className="pricing-header">
                                        <h3>Daily plan</h3>
                                    </div>

                                    <div className="price">
                                        <sup>$</sup>120 <sub>/ Day</sub>
                                    </div>

                                    <ul className="pricing-features">
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Web Development
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Email Integration 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Messenger Integration
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Mobile + Desktop Apps
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Quick Responses 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i> 
                                            Drag & Drop Widgets
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Visitor Notes 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i> 
                                            Google Analytics
                                        </li>
                                    </ul>

                                    <div className="btn-box">
                                        <Link href="/#">
                                            <a className="btn btn-primary">
                                                Select the plan
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Single pricing table */}
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-pricing-table">
                                    <div className="pricing-header">
                                        <h3>Weekly plan</h3>
                                    </div>

                                    <div className="price">
                                        <sup>$</sup>840 <sub>/ Week</sub>
                                    </div>

                                    <ul className="pricing-features">
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Web Development
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Email Integration 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Messenger Integration
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Mobile + Desktop Apps
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Quick Responses 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i> 
                                            Drag & Drop Widgets
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Visitor Notes 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i> 
                                            Google Analytics
                                        </li>
                                    </ul>

                                    <div className="btn-box">
                                        <Link href="/#">
                                            <a className="btn btn-primary">
                                                Select the plan
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Single pricing table */}
                            <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                <div className="single-pricing-table">
                                    <div className="pricing-header">
                                        <h3>Monthly plan</h3>
                                    </div>

                                    <div className="price">
                                        <sup>$</sup>3,600<sub> / Month</sub>
                                    </div>

                                    <ul className="pricing-features">
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Web Development
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Email Integration 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Messenger Integration
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Mobile + Desktop Apps
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Quick Responses 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i> 
                                            Drag & Drop Widgets
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i>
                                            Visitor Notes 
                                        </li>
                                        <li>
                                            <i className="icofont-check-circled"></i> 
                                            Google Analytics
                                        </li>
                                    </ul>

                                    <div className="btn-box">
                                        <Link href="/#">
                                            <a className="btn btn-primary">
                                                Select the plan
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PricingStyleThree;