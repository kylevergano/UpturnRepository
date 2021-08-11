import React, { Component } from 'react';
import NavbarTwo from '../../../components/Layouts/NavbarTwo';

import Link from 'next/link';
import Footer from '../../../components/Layouts/Footer';


class Aabout extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <div className="hero-banner hero-bgabout">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center" style={{textAlign:"left"}}>
                                 
                                  
                                            <h1 style={{color:"white"}}>The Philippines is one of the countries most vulnerable to the climate crisis.</h1>
                                                
                                            <p style={{color:"white"}}>From extreme tropical storms to yearly heatwaves and droughts, the Philippines is no stranger to the impacts of climate change.</p>
                                        
                                   

                                          
                                     
                                   
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-banner startup-agency" style={{marginTop:"-100px;"}}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                   

                                    <div className="col-lg-6">
                                        <div className="banner-image">
                                            <img src="/images/static/about.png" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <b><p style={{fontSize:"46px"}}><span style={{display:"block"}}><span style={{color:"black"}}>What is </span><span style={{color:"#0057A5"}}>Climate </span><span style={{color:"#F5B100"}}>Change</span>?</span></p></b>
                                            <p>Climate change is a significant shift in the pattern of weather, and related changes in oceans and land surfaces, occurring over time scales of decades and even longer.</p>
                                   

                                            <Link href="/contact">
                                                <a className="btn btn-primary">Learn More</a>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-banner hero-bgabout2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center" style={{textAlign:"center"}}>
                                 
                                  
                                            <h1 style={{color:"white"}}>Climate Change in the Philippines</h1>
                                                
                                            <p style={{color:"white"}}>The Philippines’ vulnerability to climate change has been long established.
                                                However, in recent years, the country has been experiencing more tremendous changes.</p>
                    <div style={{marginTop:"90px"}}></div>
                    <div className="row justify-content-center">
  
                        <div className="col-lg-4 col-sm-12">
                            <div className="funfact1">
                                  <img src="/images/static/about1.png" alt="image" />
                                <div style={{padding:"20px"}}>
                                <p style={{color:"white"}}>The Philippines’ waste generation is expected to increase 40% in the next 10 years, or about 30,000 tons per day annually.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <div className="funfact1">
                                  <img src="/images/static/about2.png" alt="image" />
                                  <div style={{padding:"20px"}}>
                                <p style={{color:"white"}}>Deforestation in the Philippines in the 20th century averaged about 150,000 ha per year.</p>
                                </div>                          
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="funfact1">
                                  <img src="/images/static/about3.png" alt="image" />
                                  <div style={{padding:"20px"}}>
                                <p style={{color:"white"}}>There could be an increase in temperatures of up to 1.8°–2.2°C by 2050.</p>
                                </div>
                            </div>
                        </div>
                    </div>   
                      
                 
                                   

                                          
                                     
                                   
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>

                <section className="funfacts-area ptb-100 bg-ffffff">
                <div className="container">


                    
                    <div  style={{textAlign:"center", marginBottom:"60px;"}}>
                                            <b><p style={{fontSize:"40px"}}><span style={{display:"block",}}><span style={{color:"black"}}> </span><span style={{color:"#0057A5"}}>Project</span><span style={{color:"#F5B100"}}>Upturn</span> aims to help LGUs build climate resilience.</span></p></b>
                                                    <div style={{marginBottom:"20px"}}></div>
                                                <p style={{color:"#646464", fontSize:"18px"}}>Upturn means an improvement or upward trend. It is also the point at which climate resilience begins to improve year-to-year.
                                                    Project Upturn is an innovative tool that aims to help you identify, assess, and prioritize climate change solutions for your community.</p>
                                                    <div style={{marginBottom:"20px"}}></div>
                                                <b><p style={{color:"#0057A5", fontSize:"24px"}}>Find the right solutions to your community’s unique challenges.</p>
                                                </b>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                  <img src="/images/static/rain.png" alt="image" />
                                  <div style={{marginTop:"20px"}}></div>
                                <p style={{marginBottom:"0px;", color:"black", }}><b>Search by Climate Risk</b></p>
                                <p>Filter solutions based on the climate risks and hazards that your community faces</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                  <img src="/images/static/locationbig.png" alt="image" />
                                  <div style={{marginTop:"20px"}}></div>
                                  <p style={{marginBottom:"0px;", color:"black",}}><b>Search by Location</b></p>
                                <p>Check out solutions implemented by other cities and municipalities</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                  <img src="/images/static/heartcircle.png" alt="image" />
                                  <div style={{marginTop:"20px"}}></div>
                                  <p style={{marginBottom:"0px;", color:"black", }}><b>Save and Export Solutions</b></p>
                                <p>Take note of solutions that you can adapt in your community</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                  <img src="/images/static/crypto.png" alt="image" />
                                  <div style={{marginTop:"20px"}}></div>
                                  <p style={{marginBottom:"0px;", color:"black", }}><b>Make Better Decisions</b></p>
                                <p>Implement tried and tested solutions that would benefit your locality’s needs</p>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </section>

                {/* <AboutContent />

                <FunFactsTwo />

                <TeamStyleThree />

                <Feedback />

                <Partner />

                <CtaAreaTwo /> */}

              
                
                <Footer/>
            </>
        );
    }
}

export default Aabout;