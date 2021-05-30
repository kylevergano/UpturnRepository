import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                {/* <PageBanner  
                    BGImage="feedback-bg"
                />   */}
                 <div className="page-title-area feedback-bg">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center" style={{textAlign:"left"}}>
                                            <h1 style={{color:"white"}}>Give Your Feedback</h1>
                                            <p style={{color:"white"}}>Let us know your thoughts about the platform and help us improve by answering our survey.</p>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="page-title-area feedback-bg">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2>Give Your Feedback</h2>
                        </div>
                    </div>
                </div>
                </div> */}
            
                {/* <ContactInfo /> */}
                
                <div className="contact-form">
                   <div style={{marginTop:"80px"}}></div>
             

                <form id="contactForm">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="firstname" id="firstname" className="form-control" placeholder="First Name" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="firstname" id="lastname" className="form-control" placeholder="Last Name" required />
                                </div>
                            </div>


                            {/* <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Phone" required />
                                </div>
                            </div> */}

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="email"  
                                    name="email" id="email" className="form-control" placeholder="Email Address" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="institution" id="firstname" className="form-control" placeholder="Institution" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="position" id="lastname" className="form-control" placeholder="Position" required />
                                </div>
                            </div>

                            {/* <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" required />
                                </div>
                            </div> */}

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" placeholder="What do you find most useful about the website? *" required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" placeholder="What else would you like to see on the website? *" required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" placeholder="Comments & Suggestions" required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <button type="submit" className="btn btn-primary">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </form>

                <div style={{marginBottom:"80px"}}></div>
            </div>
{/* 
                <div className="ptb-100">
                    <Newsletter />
                </div> */}

                <Footer/>
            </>
        );
    }
}

export default Contact;