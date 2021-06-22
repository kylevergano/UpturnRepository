import React, { Component } from 'react';
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ContactInfo from '../../components/Contact/ContactInfo';
import ContactForm from '../../components/Contact/ContactForm';
import Newsletter from '../../components/Common/Newsletter';
import Footer from '../../components/Layouts/Footer';
import {firebase} from '../../firebase';

class Glossary extends Component {


    state = {

        glossary: null
    
    }

    async componentDidMount(){

        const linkSnapshot = await firebase.firestore().collection('GLOSSARY').get()
        const glossaryContainer = [];

        linkSnapshot.forEach (doc => {      
                glossaryContainer.push(doc);
        });

                this.setState({
                    glossary: glossaryContainer
                });

    }

    render() {
        return (
            <>
                <NavbarTwo />
               
                 <div className="page-title-area glossary-bg">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center" style={{textAlign:"left"}}>
                                            <h1 style={{color:"white"}}>Glossary</h1>
                                            <p style={{color:"white"}}>Here is a list of terms related to climate change and their definitions.</p>
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ilinks-area ptb-100 bg-ffffff">
                    <div className="container">
                        <div className="row justify-content-left" style={{marginBottom:"50px"}}>  
                            <div className="col-lg-4 col-sm-6">
                                <p style={{color:"#0057A5", fontSize:"24px"}}><b>TERM</b></p>

                            </div>
                            <div className="col-lg-8 col-sm-6">
                                <p style={{color:"#F5B100", fontSize:"24px"}}><b>DEFINITION</b></p>
                            </div>
                        </div>         


                        {   
                            this.state.glossary &&
                            this.state.glossary.map(doc => {
                                return(
                                    <div className="row justify-content-left" style={{borderBottom:"1px solid #D6D6D6", marginBottom:"20px"}}>  
                                    <div className="col-lg-4 col-sm-6">
                                        <p style={{color:"black", fontSize:"18px"}}>{doc.data().term}</p>
        
                                    </div>
                                    <div className="col-lg-8 col-sm-6">
                                        <p style={{color:"black", fontSize:"18px"}}>{doc.data().definition}</p>
                                    </div>
                                </div>   

                                    )
                                }
                            )


                        }

                        
                        
                        
                          
                        
                                           
                    </div>
                </section>
                
             


                <Footer/>
            </>
        );
    }
}

export default Glossary;