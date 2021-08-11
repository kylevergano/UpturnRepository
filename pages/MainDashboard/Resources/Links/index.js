import React, { Component } from 'react';
import NavbarTwo from '../../../../components/Layouts/NavbarTwo';
import PageBanner from '../../../../components/Common/PageBanner';
import ContactInfo from '../../../../components/Contact/ContactInfo';
import ContactForm from '../../../../components/Contact/ContactForm';
import Newsletter from '../../../../components/Common/Newsletter';
import Footer from '../../../../components/Layouts/Footer';
import {firebase} from '../../../../firebase';
import Link from 'next/link';

class ImportantLinks extends Component {

    state = {

        climateInformation: null,
        planningTool: null,

    }


    async componentDidMount(){
        
        const linkSnapshot = await firebase.firestore().collection('LINKS').get()
        const climateInformation = [];
        const planningTool = [];

        linkSnapshot.forEach (doc => {
            if(doc.data().classification === "climate information"){        
                            
                climateInformation.push(doc);
            
            }

            else if (doc.data().classification === "planning tool"){
                
                planningTool.push(doc);
        
            }
        });

                this.setState({
                    climateInformation: climateInformation,
                    planningTool: planningTool
                });


               
    }

    gotoURL(link){

        window.open(link);

    };
    render() {
        return (
            <>
                <NavbarTwo />
                {/* <PageBanner  
                    BGImage="feedback-bg"
                />   */}
                 <div className="page-title-area links-bg">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center" style={{textAlign:"left"}}>
                                            <h1 style={{color:"white"}}>Important Links</h1>
                                            <p style={{color:"white"}}>Here are useful links to external sites which you can access to get more information about climate change.</p>
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
                
                <section className="ilinks-area ptb-100 bg-ffffff">
                    <div className="container">
                        <div className="row justify-content-left">  
                            
                            <p style={{fontSize:"24px"}}><b>CLIMATE INFORMATION</b></p>
                                {
                                    this.state.climateInformation &&
                                    this.state.climateInformation.map(doc => {
                                        return(
                                        <Link href={doc.data().link}>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="ilink" >
                                                    <div style = {{marginTop:"20px"}}></div>
                                                    <p style={{marginBottom:"10px;", color:"#0057A5", fontSize:"24px", lineHeight: "30px"}}><b>{doc.data().title}</b></p>
                                                    <p style={{fontSize:"18px",color:"#F5B100"}}>{doc.data().institution}</p>
                                                </div>
                                            </div>
                                        </Link>
                                        )
                                    })
                                }

                        </div>
                                                
                               


                        <p style={{marginTop:"120px", fontSize:"24px"}}><b>PLANNING TOOL</b></p> 
                        <div className="row justify-content-left">  

                        {
                                    this.state.planningTool &&
                                    this.state.planningTool.map(doc => {
                                        return(
                                        <Link href={doc.data().link}>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="ilink" >
                                                    <div style = {{marginTop:"20px"}}></div>
                                                    <p style={{marginBottom:"10px;", color:"#0057A5", fontSize:"24px", lineHeight: "30px"}}><b>{doc.data().title}</b></p>
                                                    <p style={{fontSize:"18px",color:"#F5B100"}}>{doc.data().institution}</p>
                                                </div>
                                            </div>
                                        </Link>
                                        )
                                    })
                                }
                                </div>                     
                    </div>
                </section>
{/* 
                <div className="ptb-100">
                    <Newsletter />
                </div> */}

                <Footer/>
            </>
        );
    }
}

export default ImportantLinks;