import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';

class BlogRightSidebar extends Component {
    render() {
        return (
            <>
                <div className="blog-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="blog-left-sidebar">
                                    <div className="pr-20">
                                        <BlogSidebar />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog1.jpg" alt="image" />
                                                    </a>
                                                </Link>

                                                <div className="post-tag">
                                                    <Link href="/#">
                                                        <a>Technology</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="blog-post-content">
                                                <span className="date">Feb 15, 2020</span>
                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            The Most Popular New top Business Apps
                                                        </a>
                                                    </Link>
                                                </h3>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more-btn">
                                                        Read More 
                                                        <i className="icofont-thin-double-right"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog2.jpg" alt="image" />
                                                    </a>
                                                </Link>

                                                <div className="post-tag">
                                                    <Link href="/#">
                                                        <a>Agency</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="blog-post-content">
                                                <span className="date">
                                                    Feb 16, 2020
                                                </span>

                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            The Best Marketing top use Management Tools
                                                        </a>
                                                    </Link>
                                                </h3>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more-btn">
                                                        Read More 
                                                        <i className="icofont-thin-double-right"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog3.jpg" alt="image" />
                                                    </a>
                                                </Link>

                                                <div className="post-tag">
                                                    <Link href="/#">
                                                        <a>IT Agency</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="blog-post-content">
                                                <span className="date">
                                                    Feb 17, 2020
                                                </span>

                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            3 WooCommerce Plugins to Boost Sales
                                                        </a>
                                                    </Link>
                                                </h3>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more-btn">
                                                        Read More 
                                                        <i className="icofont-thin-double-right"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog4.jpg" alt="image" />
                                                    </a>
                                                </Link>

                                                <div className="post-tag">
                                                    <Link href="/#">
                                                        <a>Development</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="blog-post-content">
                                                <span className="date">
                                                    Feb 18, 2020
                                                </span>

                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            Top 21 Must-Read Blogs For Creative Agencies
                                                        </a>
                                                    </Link>
                                                </h3>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more-btn">
                                                        Read More 
                                                        <i className="icofont-thin-double-right"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog5.jpg" alt="image" />
                                                    </a>
                                                </Link>

                                                <div className="post-tag">
                                                    <Link href="/#">
                                                        <a>Apps</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="blog-post-content">
                                                <span className="date">
                                                    Feb 19, 2020
                                                </span>

                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            The Most Popular New top Business Apps
                                                        </a>
                                                    </Link>
                                                </h3>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more-btn">
                                                        Read More 
                                                        <i className="icofont-thin-double-right"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog-item">
                                            <div className="blog-image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog6.jpg" alt="image" />
                                                    </a>
                                                </Link>

                                                <div className="post-tag">
                                                    <Link href="/#">
                                                        <a>Marketing</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="blog-post-content">
                                                <span className="date">
                                                    Feb 20, 2020
                                                </span>

                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>
                                                            The Best Marketing top use Management Tools
                                                        </a>
                                                    </Link>
                                                </h3>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more-btn">
                                                        Read More 
                                                        <i className="icofont-thin-double-right"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        {/* Pagination */}
                                        <div className="pagination-area">
                                            <Link href="/#">
                                                <a className="prev page-numbers">
                                                    <i className="icofont-double-left"></i>
                                                </a>
                                            </Link>

                                            <Link href="/#">
                                                <a className="page-numbers">1</a>
                                            </Link>

                                            <span className="page-numbers current">2</span>

                                            <Link href="/#">
                                                <a className="page-numbers">3</a>
                                            </Link>

                                            <Link href="/#">
                                                <a className="page-numbers">4</a>
                                            </Link>

                                            <Link href="/#">
                                                <a className="next page-numbers">
                                                    <i className="icofont-double-right"></i>
                                                </a>
                                            </Link>
                                        </div>
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

export default BlogRightSidebar;