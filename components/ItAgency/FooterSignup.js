import React, { Component } from 'react';
import Link from 'next/link';

class FooterSignup extends Component {
    render() {
        return (
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
        );
    }
}

export default FooterSignup;