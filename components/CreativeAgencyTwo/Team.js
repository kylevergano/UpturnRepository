import React, { Component } from 'react';
import Link from 'next/link';

class Team extends Component {
    render() {
        return (
            <>
                <div className="pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Creative Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card text-center">
                                    <img src="/images/team/team5.jpg" alt="Image" className="rounded" />

                                    <div className="team-caption">
                                        <h3>James White</h3>
                                        <p>CEO & Founder</p>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-dribbble"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card text-center">
                                    <img src="/images/team/team6.jpg" alt="Image" className="rounded" />

                                    <div className="team-caption">
                                        <h3>Johnson Lee</h3>
                                        <p>Backend Specialist</p>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-dribbble"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card text-center">
                                    <img src="/images/team/team7.jpg" alt="Image" className="rounded" />

                                    <div className="team-caption">
                                        <h3>Williams Smith</h3>
                                        <p>Front-end Specialist</p>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-dribbble"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card text-center">
                                    <img src="/images/team/team8.jpg" alt="Image" className="rounded" />

                                    <div className="team-caption">
                                        <h3>David Miller</h3>
                                        <p>Reactjs Specialist</p>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-linkedin"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-facebook"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-instagram"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a target="_blank"><i className="icofont-dribbble"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Team;