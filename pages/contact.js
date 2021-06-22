import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import ReactStars from "react-rating-stars-component";
import Swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {firebase} from '../firebase'

class Contact extends Component {


    constructor(props){
            
        super(props);

        this.state = {
            // firstName:'',
            // lastName:'',
            // email: '',
            // institution:'',
            // position:'',
            q1:'',
            q2:'',
            q3:'',
            stars: 0,
            starChanged: false,
            MySwal:withReactContent(Swal),

        }

    }


    ratingChanged = async (newRating) => {
        const rating = newRating;
        await this.setState({
            stars:rating,
            starChanged: true,
        })
        await console.log("stars: ",this.state.stars);
      }
      
    
    

    save = async(e) =>{
        e.preventDefault();
        if (this.state.starChanged === false){
            return this.state.MySwal.fire({
                icon: 'error',
                title: 'Please provide a rating',
              })
        }

        else {
            await firebase.firestore().collection('FEEDBACKS').add({     
             stars: this.state.stars,
             question1: this.state.q1,
             question2: this.state.q2,
             question3: this.state.q3,
           
             }).then(
            console.log("entered")
            

            
             )
             .catch((error) => {
             console.error("Error adding document: ", error);
             });
                 
                 return this.state.MySwal.fire({
                     icon: 'success',
                     title: 'Your response has been submitted and recorded.',
                     text: 'Thanks for helping us improve Project Upturn!',
                     confirmButtonText: 'BACK TO THE SITE',
                   }).then((result) => {
                     if (result.isConfirmed) {
                         window.location.href = '/it-agency';
                     }
                   })

            
        }

      }

    


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
                
                <div className="contact-form" onSubmit = {this.save}>
                   <div style={{marginTop:"80px"}}></div>
             

                <form id="contactForm">
                    <div className="container">

                    <div className = "row" style={{marginBottom:"20px"}}>
                        <div className = "col-lg-12">
                            <p>
                                How would you rate your Project Upturn Experience?
                            </p>
                        </div>
                    </div>
                    <div className ="row">
                        <div className ="col-lg-12">
                            <div className="form-group" style={{textAlign:"center"}}>
                                <label for="stars"><h5><b>  <ReactStars 
                                            count={5}
                                            onChange={this.ratingChanged}
                                            size={50}
                                            activeColor="#ffd700"
                                            /></b></h5>
                                </label>
                            </div>
                        </div>
                    </div>
                        

                        <div className="row">
                            {/* <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="firstname" id="firstname" onChange={e => this.setState({ firstName: e.target.value })} className="form-control" placeholder="First Name" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="firstname" id="lastname" onChange={e => this.setState({ lastName: e.target.value })} className="form-control" placeholder="Last Name" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="email"  
                                    name="email" id="email" className="form-control" onChange={e => this.setState({ email: e.target.value })} placeholder="Email Address" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="institution" id="firstname" onChange={e => this.setState({ institution: e.target.value })} className="form-control" placeholder="Institution" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="position" id="lastname" onChange={e => this.setState({ position: e.target.value })} className="form-control" placeholder="Position" required />
                                </div>
                            </div> */}


                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" onChange={e => this.setState({ q1: e.target.value })} placeholder="What do you find most useful about the website? *" required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" onChange={e => this.setState({ q2: e.target.value })} placeholder="What else would you like to see on the website? *" required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" onChange={e => this.setState({ q3: e.target.value })} placeholder="Comments & Suggestions" required></textarea>
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