import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleTwo extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <>
                <section className="pricing-area pt-100 pb-70 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <h2>Choose The Pricing Plan</h2>
                        </div>

                        <div className="tab pricing-list-tab">
                            {/* Pricing Tab List */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => this.openTabSection(e, 'tab1')}
                                >
                                    <i className="icofont-ui-calendar"></i> Monthly
                                </li>

                                <li
                                    onClick={(e) => this.openTabSection(e, 'tab2')}
                                >
                                    <i className="icofont-ui-calendar"></i> Yearly
                                </li>
                            </ul>

                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="row">
                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                    <h3>Basic</h3>
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>49 <sub>/ monthly</sub>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        24/7 Live Chat
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
                                                        Visitor Info
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
                                                        <i className="icofont-check-circled"></i>Drag & Drop Widgets
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Visitor Notes 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>Google Analytics
                                                    </li>
                                                </ul>

                                                <div className="btn-box">
                                                    <Link href="/#">
                                                        <a className="btn btn-primary">
                                                            <i className="bx bxs-hot"></i> 
                                                            Try It Free Now 
                                                            <span></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                    <h3>Standard</h3>
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>69 <sub>/ monthly</sub>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        24/7 Live Chat
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
                                                        Visitor Info
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
                                                        <i className="icofont-check-circled"></i>Drag & Drop Widgets
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
                                                            <i className="bx bxs-hot"></i> 
                                                            Try It Free Now 
                                                            <span></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                    <h3>Professional</h3>
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>99<sub> / monthly</sub>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        24/7 Live Chat
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
                                                        Visitor Info
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
                                                            <i className="bx bxs-hot"></i> 
                                                            Try It Free Now 
                                                            <span></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <div className="row">
                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                    <h3>Basic</h3>
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>149 <sub>/ yearly</sub>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        24/7 Live Chat
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
                                                        Visitor Info
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
                                                            <i className="bx bxs-hot"></i> 
                                                            Try It Free Now 
                                                            <span></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                    <h3>Standard</h3>
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>159 <sub>/ yearly</sub>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        24/7 Live Chat
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
                                                        Visitor Info
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
                                                            <i className="bx bxs-hot"></i> 
                                                            Try It Free Now 
                                                            <span></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                    <h3>Professional</h3>
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>199 <sub>/ yearly</sub>
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        24/7 Live Chat
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
                                                        Visitor Info</li>
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
                                                            <i className="bx bxs-hot"></i> 
                                                            Try It Free Now 
                                                            <span></span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
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

export default PricingStyleTwo;