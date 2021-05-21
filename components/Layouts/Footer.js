import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>

<div className="cta-area-signup ptb-100">
                <div className="container">
                    <div >
                        <h1 style={{color:"white", fontFamily:"Sora"}}><b>Sign Up for Free</b></h1>
                        <p style={{color:"white"}}><b>Identify priority climate change solutions fit for your community with Project Upturn.</b></p>
                    </div>

                    <div>
                        <Link href="/contact">
                            <a className="btn btn-primary" style={{marginTop:"20px"}}>GET STARTED</a>
                        </Link>
                    </div>
                </div>
            </div>
            
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img style={{width:"250px;", height:"250px;"}}src="/images/static/footerlogo.png" alt="image" />
                                            </a>
                                        </Link>
                                    </div>


                                   
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                    
                                <h1 style={{color:"white"}}>Project Upturn</h1>
                                <p style={{color:"white"}}>
                                Project Upturn is a planning tool that aims to help you identify, assess, and prioritize climate change solutions based on your local context.</p>
                                <ul className="social-links">
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4" style={{marginLeft:"80px;!important", marginTop:"10px;"}}>
                                   

                                    <ul className="list">
                                        <li>
                                            <Link href="/contact">
                                                <a>HOME</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>ABOUT</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>SOLUTIONS</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>GIVE US FEEDBACK</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>REPORT AN ERROR</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4" style={{marginTop:"10px"}}>
                                   

                                    <ul className="list">
                                        <li>
                                            <Link href="/contact">
                                                <a>IMPORTANT LINKS</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>DIRECTORY</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>GLOSSARY</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>DASHBOARD</a>
                                            </Link>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </div>

                          
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; Oscar M. Lopez Center. All rights reserved. {currentYear} </p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;