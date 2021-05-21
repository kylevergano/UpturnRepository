import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';

class BlogRightSidebar extends Component {

    state={
        solutions: null,
    }

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.setState({
            solutions :[
                {
                    title: "Adopting Climate-Smart Agriculture practices or climate-smart intervent...",
                    risk: "Rainfall Variability, Rising Land T...",
                    sector: "Agriculture",
                    location: "Sultan Kudarat",
                    type: "PROJECT",
                    image: "/images/static/posts/post1.png",                  
                },
    
                {
                    title: "Las Kuatras Marias - Integrated Siversified Organic System",
                    risk: "Drought, Floods, Typhoons",
                    sector: "Agriculture",
                    location: "Oriental Mindoro",
                    type: "PROGRAM",
                    image: "/images/static/posts/post2.png",
                },
    
                {
                    title: "Climate Change Resilient Pilot House (CCRPH)",
                    risk: "Climate Hazard Unspecified",
                    sector: "Buildings",
                    location: "Camarines Sur",
                    type: "ACTIVITY",
                    image: "/images/static/posts/post3.png",
                },
    
                {
                    title: "Water Harvesting Tank",
                    risk: "Climate Hazard Unspecified",
                    sector: "Agriculture",
                    location: "Oriental Mindoro",
                    type: "PROJECT",
                    image: "/images/static/posts/post4.png",
                },

                {
                    title: "Adaptation to Climate Change among Farmers in Bulacan",
                    risk: "Drought, Flood, Typhoons/Tropi...",
                    sector: "Agriculture",
                    location: "Bulacan",
                    type: "ACTIVITY",
                    image: "/images/static/posts/post5.png",
                },

                {
                    title: "Applying Ecological Engineering for Rice Production Systems",
                    risk: "Multiple",
                    sector: "Agriculture, Ecosystem-based a...",
                    location: "Provinces in Luzon, Mindanao",
                    type: "PROJECT",
                    image: "/images/static/posts/post6.png",
                },

              
    
            ],

            climateHazards: ["Broad Climate Change Impacts", "Drought", "Extreme Rainfall", "Flood", "Forest Fire"],

            sectors: ["Agriculture", "Biodiversity", "Buildings", "Coastal Areas", "Disaster Risk Reduction"],

            scale: ["Regional", "Provincial", "Municipal/City", "Household"],

            instrument: ["Policy & Governance","Research & Development","Knowledge and Capacity Building & Training", "Action Delivery"],

            type: ["Program","Project","Activity"],

        })
    }
    render() {
        return (
            <>

            <div className= "page-title-area solutions-bg">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h1 style={{color:"white"}}>Search Climate Solutions</h1>
                        </div>
                    </div>
                </div>
            </div>
                <div className="blog-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="blog-left-sidebar">
                                    <div className="pr-20">
                                    <>
                <div className="widget-area" id="secondary">
                    {/* Search form */}
                    <div className="widget widget_search">
                        <form className="search-form">
                            <label>
                                <input type="search" className="search-field" placeholder="Search..." />
                            </label>
                            <button type="submit" className="search-submit">
                                <i className="icofont-search-1"></i>
                            </button>
                        </form>
                    </div>

{/*                    
                    <div className="widget widget_posts_thumb">
                        <h3 className="widget-title">Popular posts</h3>

                        <article className="item">
                            <Link href="/blog-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg1" role="img"></span>
                                </a>
                            </Link>
                            <div className="info">
                                <time>March 15, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/blog-details">
                                        <a>The Best Marketing top use Management Tools</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <a href="/blog-details" className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                            <div className="info">
                                <time>March 16, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/blog-details">
                                        <a>Top 21 Must-Read Blogs For Creative Agencies</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <a href="/blog-details" className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                            <div className="info">
                                <time>March 17, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/blog-details">
                                        <a>Protect your workplace from cyber attacks</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    </div> */}

                    {/* <div className="widget widget_recent_entries">
                        <h3 className="widget-title">Recent posts</h3>

                        <ul>
                            <li>
                                <Link href="/blog-details">
                                    <a>The security risks of changing package owners</a>
                                </Link>
                                <span className="post-date">March 15, 2020</span>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                    <a>Tips to protecting business and Family</a>
                                </Link>
                                <span className="post-date">March 16, 2020</span>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                    <a>Protect your workplace from cyber attacks</a>
                                </Link>
                                <span className="post-date">March 17, 2020</span>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                    <a>Business debit Fees to increase in 2020</a>
                                </Link>
                                <span className="post-date">March 18, 2020</span>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                    <a>10 tips to reduce your card processing costs</a>
                                </Link>
                                <span className="post-date">March 19, 2020</span>
                            </li>
                        </ul>
                    </div> */}

                    {/* Categories */}
                    <div className="widget widget_categories">

                         <h3 className="widget-title" style={{color:"#F5B100"}}>View as Map</h3>

                        <h3 className="widget-title">Climate Hazard</h3>

                        <ul>
                            {/* <li>
                                <Link href="/blog">
                                    <a>Business <span className="post-count">(05)</span></a>
                                </Link>
                            </li> */}
                            { this.state.climateHazards &&
                              this.state.climateHazards.map(hazard => {
                                  return(                            
                                        <li>
                                                {hazard}
                                        </li>                             
                                  )
                                 
                              })
                                
                            }
                            
                        </ul>
                        <p style = {{color:"#F5B100", paddingLeft:"15px;", marginTop:"-10px;"}}><b>SEE MORE</b></p>

                    </div>

                    {/* Tags */}
                    {/* <div className="widget widget_tag_cloud">
                        <h3 className="widget-title">Tags</h3>

                        <div className="tagcloud">
                            <Link href="/blog">
                                <a>IT <span className="tag-link-count">(3)</span></a>
                            </Link>
                            <Link href="/blog">
                                <a>React <span className="tag-link-count">(3)</span></a>
                            </Link>
                            <Link href="/blog">
                                <a>Games <span className="tag-link-count">(2)</span></a>
                            </Link>
                            <Link href="/blog">
                                <a>Development <span className="tag-link-count">(2)</span></a>
                            </Link>
                            <Link href="/blog">
                                <a>Design <span className="tag-link-count">(1)</span></a>
                            </Link>
                            <Link href="/blog">
                                <a>Apps <span className="tag-link-count">(1)</span></a>
                            </Link>
                            <Link href="/blog">
                                <a>Marketing <span className="tag-link-count">(1)</span></a>
                            </Link>
                            <Link href="/blog">
                                <a>Tips <span className="tag-link-count">(2)</span></a>
                            </Link>
                        </div>
                    </div> */}

<div className="widget widget_categories">


<h3 className="widget-title">Sector</h3>

<ul>
   {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
   { this.state.sectors &&
     this.state.sectors.map(sector => {
         return(
   
        <li>
           
               {sector}
           
        </li>
    
         )
        
     })
       
   }
   
</ul>
<p style = {{color:"#F5B100", marginTop:"-10px;"}}><b>SEE MORE</b></p>


<h3 className="widget-title">Scale of Use</h3>

<ul>
   {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
   { this.state.scale &&
     this.state.scale.map(scale => {
         return(
   
        <li>
           
               {scale}
           
        </li>
    
         )
        
     })
       
   }
   
</ul>

<h3 className="widget-title">CCET Instrument</h3>

<ul>
   {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
   { this.state.instrument &&
     this.state.instrument.map(instrument => {
         return(
   
        <li>
           
               {instrument}
           
        </li>
    
         )
        
     })
       
   }
   
</ul>


<p style = {{color:"#F5B100", marginTop:"-10px;"}}><b>SEE MORE</b></p>


<h3 className="widget-title">Solution Type</h3>

<ul>
   {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
   { this.state.instrument &&
     this.state.instrument.map(instrument => {
         return(
   
        <li>
           
               {instrument}
           
        </li>
    
         )
        
     })
       
   }
   
</ul>

</div>
                </div>
                </>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <div className="row">                                  
                                    {
                                    
                                    this.state.solutions &&
                                    this.state.solutions.map(solution => 
                                        {   
                                            return(
                                            <div className="col-lg-6 col-md-6">
                                            <div className="single-blog-item">
                                                <div className="blog-image">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <img src={solution.image} alt="image" />
                                                        </a>
                                                    </Link>
    
                                                    <div className="post-tag">
                                                        <Link href="/#">
                                                            <a className= {solution.type === "PROJECT"? "project": 
                                                                           solution.type === "PROGRAM"? "program": 
                                                                           solution.type === "ACTIVITY"? "activity": null}>
                                                                
                                                                {solution.type}</a>
                                                        </Link>
                                                    </div>
                                                </div>
    
                                                <div className="blog-post-content">
                                                <div className="info-head">
                                                                      <h2 style={{color:"#0057A5", fontSize:"20px"}}>{solution.title}</h2>
                                                                     
                                                                  </div>
                              
                                                                  <div className="row">
                                                                    <div className="col-sm-8" style={{marginTop:"23px"}}>
                                                                      <div className="single-footer-widget">
                                       
                                                                            <ul className="get-in-touch">
                                                                                <li className="featured-icon-list-1-li">
                                                                                    <i><img src="/images/icons/featured/rainfall.png" alt="Service Image" /></i>{solution.risk}
                                                                                </li>
                                                                                <li className="featured-icon-list-1-li">
                                                                                    <i><img src="/images/icons/featured/agriculture.png" alt="Service Image" /></i>{solution.sector}
                                                                                </li>
                                                                                <li className="featured-icon-list-1-li">
                                                                                    <i><img src="/images/icons/featured/location.png" alt="Service Image" /></i> {solution.location}
                                                                                </li>
                                                                            </ul>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                            )
                                        })

                                    }
                                    
                                    

                                    <div className="col-lg-12 col-md-12">
                                        {/* Pagination */}
                                        <div className="pagination-area">
                                            <Link href="/#">
                                                <a className="prev page-numbers">
                                                    <i className="icofont-double-left"></i>
                                                </a>
                                            </Link>

                                            <Link href="/#">
                                                <a className="page-numbers current">1</a>
                                            </Link>

                                            <span className="page-numbers">2</span>

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