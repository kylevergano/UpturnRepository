import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
    ('/images/portfolio/portfolio1.jpg'),
    ('/images/portfolio/portfolio2.jpg'),
    ('/images/portfolio/portfolio3.jpg'),
    ('/images/portfolio/portfolio4.jpg'),
    ('/images/portfolio/portfolio5.jpg'),
]

class PortfolioDetailsContent extends Component {

    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {

        const { photoIndex, isOpenImage } = this.state;

        return (
            <>
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpenImage: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )} 

                <section className="portfolio-details ptb-100">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-lg-4 col-md-6 p-0">
                                <div className="portfolio-details-image">
                                    <img src="/images/portfolio/portfolio1.jpg" alt="image" />
    
                                    <Link href="/#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 0, isOpenImage: true })}}
                                        >
                                        </a>
                                    </Link>
                                </div>

                                <div className="portfolio-details-image">
                                    <img src="/images/portfolio/portfolio2.jpg" alt="image" />

                                    <Link href="/#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 1, isOpenImage: true })}}
                                        >
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 p-0">
                                <div className="portfolio-details-image">
                                    <img src="/images/portfolio/portfolio3.jpg" alt="image" />

                                    <Link href="/#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 2, isOpenImage: true })}}
                                        >
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 pr_0">
                                        <div className="portfolio-details-image">
                                            <img src="/images/portfolio/portfolio4.jpg" alt="image" />

                                            <Link href="/#">
                                                <a 
                                                    className="popup-btn"
                                                    onClick={e => {e.preventDefault(); this.setState({ photoIndex: 3, isOpenImage: true })}}
                                                >
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 pl_0">
                                        <div className="portfolio-details-image">
                                            <img src="/images/portfolio/portfolio5.jpg" alt="image" />

                                            <Link href="/#">
                                                <a 
                                                    className="popup-btn"
                                                    onClick={e => {e.preventDefault(); this.setState({ photoIndex: 4, isOpenImage: true })}}
                                                >
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-desc">
                                    <h2>We Provide Useful Services</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                                    
                                    <h2>Core Development</h2>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>

                                    <h2>Define Your Choices</h2>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic.</p>

                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this.</p>
                                </div>
                    
                                <div className="service-details-info">
                                    <div className="single-info-box">
                                        <h4>Client</h4>
                                        <span>James Anderson</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <span>Saas, Marketing</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <span>February 28, 2020</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul className="social">
                                            <li>
                                                <Link href="/#">
                                                    <a target="_blank">
                                                        <i className="icofont-facebook"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a target="_blank">
                                                        <i className="icofont-twitter"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a target="_blank">
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a target="_blank">
                                                        <i className="icofont-instagram"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <Link href="/#">
                                            <a className="default-btn" target="_blank">Live Preview</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PortfolioDetailsContent;