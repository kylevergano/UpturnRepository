import React, { Component } from 'react';

class AdminBanner extends Component {
    render() {

        let { pageTitle, BGImage } = this.props;
       
        return (
            // <div className="page-title-area bg-one">
            <div className={`page-title-area ${BGImage}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2>Hello admin</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminBanner;