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
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import withReactContent from 'sweetalert2-react-content'
import 'firebase/storage';



class Report extends Component {

    constructor(props){
        super(props);

        this.ref = firebase.firestore().collection('REPORTS'); 

        this.state ={
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

            firstName:'',
            lastName:'',
            email: '',
            institution:'',
            position:'',
            reportLocation:'',
            fileURL:'',
            description:'',
        }

        this.setState({uploadbutton:null})
       

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

    
    async save(){
              console.log("save");
               await firebase.firestore().collection('REPORTS').add({
                title:"sample",
                level:"sample",
              
                }).then(
               console.log("entered")
                )
                .catch((error) => {
                console.error("Error adding document: ", error);
                });

        // this.setState({
        //     uploadbutton: null,
        //     loading: 
        //     <center>
        //         <p style={{marginBottom:"7px", color:"black", textAlign:"center", fontSize:"12px" }}>Uploading...</p>
        //         <p><Spinner size="lg" color="primary" /></p>
        //     </center>,
        // })
     
        // let randomnumber = Math.floor(Math.random() * 1000000); 
        // let bucketname ='reports';
       

   

            // try {

            //     await firebase
            //     .storage()
            //     .ref(`${bucketname}/${this.state.file.path}`)
            //     .put(this.state.file)
            //     .signInWithEmailAndPassword(email, pass)
            //     .catch(function (error) {
            //       const message = error.message;
            //       toast({
            //         title: "An error occurred.",
            //         description: message,
            //         status: "error",
            //         duration: 9000,
            //         isClosable: true,
            //       });
            //     });

          
                // console.log("asdasdasdasdasd",firebase.storage.ref());
                // console.log("enter try");
                
                
                // let self = this;

                // const storageRef = firebase.storage().ref(`${bucketname}/${this.state.file.path}`);
                
                // console.log(firebase.storage.ref());

                // const uploadTaskSnapshot = await storageRef.put(this.state.file);

                // console.log("uploaded1");
        
                // const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();

                // console.log("uploaded2");

                // console.log(downloadURL);
        
                // self = downloadURL;

    
                // this.setState({
                //     downloadURL:downloadURL,
                  
                // })

                // this.setState({
                   
                //     loading:   
                    
                //     <Dropzone onDrop={acceptedFiles => this.handleOnDrop(acceptedFiles)}>
                //     {({getRootProps, getInputProps}) => (
                //      <div className ="col-lg-6 col-md-6">
                //         <div  {...getRootProps()}>
                //             <input {...getInputProps()} />
                        
                //             <p style={{textAlign:"center"}}><Upload style={this.state.uploadstyle}/></p>
                //             <p style={{marginBottom:"-3px", color:"black", textAlign:"center", fontSize:"12px" }}>click to upload file or drag file here</p>
                          
                //         </div>
                //         </div>
                //     )}
                //     </Dropzone>,
                // })

                // this.setState({
                //     file: null,
                // })
                
               
                // this.props.onHide(this.props.title,this.props.body,this.state.downloadURL);
        
            //   } catch (error) {
               
            //     alert("Image uploading failed!");
            //   }

          

    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
       
        
      }

      

    render() {
        const { firstName,lastName,email,institution,position,fileURL,description,reportLocation} = this.state;
        firebaseClient();
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
             

                <form id="contactForm" >
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

                            <div className="col-lg-8">
                                <div className="form-group">
                                    <input type="text" name="reportlocation" id="lastname" className="form-control" placeholder="In which page of the website did you find an error?" required />
                                </div>
                            </div>

                            <div className ="col-lg-5">
                                <div className="col-lg-12 col-md-6">
                                    <div style={{marginBottom:"20px"}}>
                                      {this.state.loading}
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col-lg-3 col-md-3">
                                    <div style={{marginBottom:"20px"}}>
                                    <p style={{marginBottom:"-10px", color:"#646464", textAlign:"left", fontSize:"14px" }}>{this.state.file.path}</p>
                                    </div>
                                </div>
                            
                           
                           

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="8" placeholder="What do you find most useful about the website? *" required></textarea>
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