import React, { Component } from 'react';
import Link from 'next/link';


class RightSolutions extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-ffffff" style={{marginTop:"-130px;"}}>
                <div className="container">
                    <div  style={{textAlign:"center", marginBottom:"60px;"}}>
                        <h2>Find the <span style={{color:"#0057A5"}}>right solutions</span> to your community’s <span style={{color:"#F5B100"}}>unique challenges</span>.</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                               
                                  <img src="/images/static/rain.png" alt="image" />
                                  <div style = {{marginTop:"20px"}}></div>
                                <p style={{marginBottom:"0px;", color:"black",}}><b>Search by Climate Risk</b></p>
                                <p>Filter solutions based on the climate risks and hazards that your community faces</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                  <img src="/images/static/locationbig.png" alt="image" />
                                  <div style = {{marginTop:"20px"}}></div>
                                  <p style={{marginBottom:"0px;", color:"black", }}><b>Search by Location</b></p>
                                <p>Check out solutions implemented by other cities and municipalities</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                  <img src="/images/static/heartcircle.png" alt="image" />
                                  <div style = {{marginTop:"20px"}}></div>
                                  <p style={{marginBottom:"0px;", color:"black", }}><b>Save and Export Solutions</b></p>
                                <p>Take note of solutions that you can adapt in your community</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="funfact">
                                  <img src="/images/static/crypto.png" alt="image" />
                                  <div style = {{marginTop:"20px"}}></div>
                                  <p style={{marginBottom:"0px;", color:"black", }}><b>Make Better Decisions</b></p>
                                <p>Implement tried and tested solutions that would benefit your locality’s needs</p>
                            </div>
                        </div>
                    </div>

                  
                </div>
            </section>
        );
    }
}

export default RightSolutions;