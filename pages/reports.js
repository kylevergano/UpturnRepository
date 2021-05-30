import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Dropzone from 'react-dropzone';
import { Upload, Loader} from 'react-feather';
import Swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import { Spinner } from 'reactstrap';
import withReactContent from 'sweetalert2-react-content'
import { ChakraProvider, useRadioGroup } from "@chakra-ui/react"
import { useRouter } from 'next/router'

import {firebase} from '../firebase'
class Report extends Component {

    constructor(props){
        super(props);

        this.ref = firebase.firestore().collection('REPORTS'); 

        this.state ={

            firstName:'',
            lastName:'',
            email: '',
            institution:'',
            position:'',
            reportLocation:'',
            fileURL:'',
            description:'',


            MySwal:withReactContent(Swal),
            uploadstyle: {
                textAlign:"center",
                marginLeft:"auto",
                marginRight:"auto",
                height:"40px",
                width:"40px",
                color:"#646464",
                },
            file: "",
            uploadbutton:null,
            downloadURL:null,
            loading: 
            <Dropzone onDrop={acceptedFiles => this.handleOnDrop(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
                <section>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div style ={ {border:"2px solid #646464", borderRadius:"7px"}}>
                    <p style={{textAlign:"center", marginTop:"10px"}}><Upload style={this.state.uploadstyle}/></p>
                    <p style={{marginBottom:"-3px", color:"#646464", textAlign:"center", fontSize:"12px" }}>click to upload file or drag file here</p>
                    <p style={{marginBottom:"10px", color:"#646464", textAlign:"center", fontSize:"12px" }}>Maximum file size: 5MB</p>
                    </div>
                </div>
                </section>
            )}
            </Dropzone>,         
        }

        // this.setState({uploadbutton:null})
       

        // this.save = this.save.bind(this);
        

    }

    

    handleOnDrop = (files, rejectedFiles) =>{

        console.log("drop");

        console.log(files);
     
        if(files[0].size > 5120000 )

        {
            
            return this.state.MySwal.fire({
                icon: 'error',
                title: 'File size too big',
                text: 'Maximum file size is 5MB',
              })
        }

        else{
        this.setState({
            file:files[0],
            // uploadbutton: <button onClick = {this.save(this.state.file)}>Save</button>
        })

        this.setState({
            uploadbutton:
            <center>
                 <p style={{marginBottom:"-10px", color:"black", textAlign:"center", fontSize:"14px" }}>{this.state.file.path}</p>
                <p><button className = "label "onClick={() => this.save()}>Upload</button></p>
            </center>
        })
    }

    }

    
     save = async(e) =>{
                 e.preventDefault();

                 let self = this;

                const storageRef = firebase.storage().ref(`REPORTS/${this.state.file.path}`);
                

                const uploadTaskSnapshot = await storageRef.put(this.state.file);

                console.log("uploaded1");
        
                const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();

                console.log("uploaded2");

                console.log(downloadURL);
        
                self = downloadURL;

        
               
        
              console.log("save");
               await firebase.firestore().collection('REPORTS').add({     
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                institution: this.state.institution,
                position: this.state.position,
                reportlocation: this.state.reportLocation,
                fileURL: downloadURL,
                description: this.state.description,
              
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

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        
      }



    render() {
        // const { firstName,lastName,email,institution,position,fileURL,description,reportLocation} = this.state;
        const { firstName} = this.state;
        return (

            
      
         
            <>
          
            
                <NavbarTwo />

                {/* <PageBanner  
                    BGImage="feedback-bg"
                />   */}
                 <div className="page-title-area report-bg">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center" style={{textAlign:"left"}}>
                               
                                            <h1 style={{color:"white"}}>Report an Error</h1>
                                                
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
             

                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="firstname"  className="form-control" onChange={e => this.setState({ firstName: e.target.value })} placeholder="First Name" value={firstName}  required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="lastname" className="form-control" onChange={e => this.setState({ lastName: e.target.value })} placeholder="Last Name" required />
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
                                    name="email" id="email" className="form-control" onChange={e => this.setState({ email: e.target.value })} placeholder="Email Address" required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="institution" id="institution" className="form-control" onChange={e => this.setState({ institution: e.target.value })} placeholder="Institution"  required />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <input type="text" name="position" id="position" className="form-control" onChange={e => this.setState({ position: e.target.value })} placeholder="Position" required />
                                </div>
                            </div>

                            {/* <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" required />
                                </div>
                            </div> */}

                            <div className="col-lg-8">
                                <div className="form-group">
                                    <input type="text" name="reportlocation" id="location" className="form-control" onChange={e => this.setState({ reportLocation: e.target.value })} placeholder="In which page of the website did you find an error?" required />
                                </div>
                            </div>

                            <div className ="col-lg-5">
                            <p>Please help us fix the error by uploading a screenshot of it</p>
                                <div className="col-lg-12 col-md-12">
                                    
                                    <div style={{marginBottom:"20px"}}>
                                      {this.state.loading}
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col-lg-3 col-md-12">

                            <div>
                                
                                <div style ={ {border:"2px solid #646464", borderRadius:"7px", height:"119px", marginTop:"43px"}}>
                                    
                                    <p style={{marginTop:"40px", color:"#646464", textAlign:"center", fontSize:"12px" }}>{this.state.file.path}</p>
                                   
                                </div>
                            </div>
                                  
                                </div>
                            
                           
                           

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" placeholder="Please describe the error" onChange={e => this.setState({ description: e.target.value })} required></textarea>
                                </div>
                            </div>

                                
                            <div className="col-lg-12 col-md-12">
                                <button type="submit" className="btn btn-primary" >SUBMIT</button>
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

export default Report;