// import React, { Component } from 'react';
import Link from 'next/link';
// import BlogSidebar from './BlogSidebar';

import React, { useEffect, useState, Component } from 'react';

import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';

import { regions, provinces, citiesMunicipalities } from 'ph-locations';

import { Row, Col, Container, Input, Tooltip } from 'reactstrap';
import Select from 'react-select';

import { Search, ArrowRight, Info } from 'react-feather';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCduzjVWYut9ma12RSeU8uh9MwQWqHX51Y';
class BlogRightSidebar extends Component {
  state = {
    solutions: null,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      solutions: [
        {
          title: 'Adopting Climate-Smart Agriculture practices or climate-smart intervent...',
          climateHazard: 'Rainfall Variability, Rising Land T...',
          sector: 'Agriculture',
          location: 'Sultan Kudarat',
          type: 'PROJECT',
          image: '/images/static/posts/post1.png',
        },

        {
          title: 'Las Kuatras Marias - Integrated Siversified Organic System',
          climateHazard: 'Drought, Floods, Typhoons',
          sector: 'Agriculture',
          location: 'Oriental Mindoro',
          type: 'PROGRAM',
          image: '/images/static/posts/post2.png',
        },

        {
          title: 'Climate Change Resilient Pilot House (CCRPH)',
          climateHazard: 'Climate Hazard Unspecified',
          sector: 'Buildings',
          location: 'Camarines Sur',
          type: 'ACTIVITY',
          image: '/images/static/posts/post3.png',
        },

        {
          title: 'Water Harvesting Tank',
          climateHazard: 'Climate Hazard Unspecified',
          sector: 'Agriculture',
          location: 'Oriental Mindoro',
          type: 'PROJECT',
          image: '/images/static/posts/post4.png',
        },

        {
          title: 'Adaptation to Climate Change among Farmers in Bulacan',
          climateHazard: 'Drought, Flood, Typhoons/Tropi...',
          sector: 'Agriculture',
          location: 'Bulacan',
          type: 'ACTIVITY',
          image: '/images/static/posts/post5.png',
        },

        {
          title: 'Applying Ecological Engineering for Rice Production Systems',
          climateHazard: 'Multiple',
          sector: 'Agriculture, Ecosystem-based a...',
          location: 'Provinces in Luzon, Mindanao',
          type: 'PROJECT',
          image: '/images/static/posts/post6.png',
        },
      ],

      climateHazards: ['Broad Climate Change Impacts', 'Drought', 'Extreme Rainfall', 'Flood', 'Forest Fire'],

      sectors: ['Agriculture', 'Biodiversity', 'Buildings', 'Coastal Areas', 'Disaster Risk Reduction'],

      scale: ['Regional', 'Provincial', 'Municipality / City', 'Household'],

      instrument: ['Policy & Governance', 'Research & Development', 'Knowledge and Capacity Building & Training', 'Action Delivery'],

      type: ['Program', 'Project', 'Activity'],
    });
  }
  render() {
    return (
      <>
        <div className='page-title-area solutions-bg'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <h1 style={{ color: 'white' }}>Search Climate Solutions</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='blog-area ptb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-12'>
                <div className='blog-left-sidebar'>
                  <div className='pr-20'>
                    <>
                      <div className='widget-area' id='secondary'>
                        {/* Search form */}
                        <div className='widget widget_search'>
                          <form className='search-form'>
                            <label>
                              <input type='search' className='search-field' placeholder='Search...' />
                            </label>
                            <button type='submit' className='search-submit'>
                              <i className='icofont-search-1'></i>
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
                        <div className='widget widget_categories'>
                          <h3 className='widget-title' style={{ color: '#F5B100' }}>
                            View as Map
                          </h3>

                          <h3 className='widget-title'>Climate Hazard</h3>

                          <ul>
                            {/* <li>
                                <Link href="/blog">
                                    <a>Business <span className="post-count">(05)</span></a>
                                </Link>
                            </li> */}
                            {this.state.climateHazards &&
                              this.state.climateHazards.map((hazard) => {
                                return <li>{hazard}</li>;
                              })}
                          </ul>
                          <p style={{ color: '#F5B100', paddingLeft: '15px;', marginTop: '-10px;' }}>
                            <b>SEE MORE</b>
                          </p>
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

                        <div className='widget widget_categories'>
                          <h3 className='widget-title'>Sector</h3>

                          <ul>
                            {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
                            {this.state.sectors &&
                              this.state.sectors.map((sector) => {
                                return <li>{sector}</li>;
                              })}
                          </ul>
                          <p style={{ color: '#F5B100', marginTop: '-10px;' }}>
                            <b>SEE MORE</b>
                          </p>

                          <h3 className='widget-title'>Scale of Use</h3>

                          <ul>
                            {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
                            {this.state.scale &&
                              this.state.scale.map((scale) => {
                                return <li>{scale}</li>;
                              })}
                          </ul>

                          <h3 className='widget-title'>CCET Instrument</h3>

                          <ul>
                            {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
                            {this.state.instrument &&
                              this.state.instrument.map((instrument) => {
                                return <li>{instrument}</li>;
                              })}
                          </ul>

                          <p style={{ color: '#F5B100', marginTop: '-10px;' }}>
                            <b>SEE MORE</b>
                          </p>

                          <h3 className='widget-title'>Solution Type</h3>

                          <ul>
                            {/* <li>
       <Link href="/blog">
           <a>Business <span className="post-count">(05)</span></a>
       </Link>
   </li> */}
                            {this.state.instrument &&
                              this.state.instrument.map((instrument) => {
                                return <li>{instrument}</li>;
                              })}
                          </ul>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>

              <div className='col-lg-8 col-md-12'>
                <div className='row'>
                  {this.state.solutions &&
                    this.state.solutions.map((solution) => {
                      return (
                        <div className='col-lg-6 col-md-6'>
                          <div className='single-blog-item'>
                            <div className='blog-image'>
                              <Link href='/blog-details'>
                                <a>
                                  <img src={solution.image} alt='image' />
                                </a>
                              </Link>

                              <div className='post-tag'>
                                <Link href='/#'>
                                  <a
                                    className={
                                      solution.type === 'PROJECT'
                                        ? 'project'
                                        : solution.type === 'PROGRAM'
                                        ? 'program'
                                        : solution.type === 'ACTIVITY'
                                        ? 'activity'
                                        : null
                                    }
                                  >
                                    {solution.type}
                                  </a>
                                </Link>
                              </div>
                            </div>

                            <div className='blog-post-content'>
                              <div className='info-head'>
                                <h2 style={{ color: '#0057A5', fontSize: '20px' }}>{solution.title}</h2>
                              </div>

                              <div className='row'>
                                <div className='col-sm-8' style={{ marginTop: '23px' }}>
                                  <div className='single-footer-widget'>
                                    <ul className='get-in-touch'>
                                      <li className='featured-icon-list-1-li'>
                                        <i>
                                          <img src='/images/icons/featured/rainfall.png' alt='Service Image' />
                                        </i>
                                        {solution.climateHazard}
                                      </li>
                                      <li className='featured-icon-list-1-li'>
                                        <i>
                                          <img src='/images/icons/featured/agriculture.png' alt='Service Image' />
                                        </i>
                                        {solution.sector}
                                      </li>
                                      <li className='featured-icon-list-1-li'>
                                        <i>
                                          <img src='/images/icons/featured/location.png' alt='Service Image' />
                                        </i>{' '}
                                        {solution.location}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  <div className='col-lg-12 col-md-12'>
                    {/* Pagination */}
                    <div className='pagination-area'>
                      <Link href='/#'>
                        <a className='prev page-numbers'>
                          <i className='icofont-double-left'></i>
                        </a>
                      </Link>

                      <Link href='/#'>
                        <a className='page-numbers current'>1</a>
                      </Link>

                      <span className='page-numbers'>2</span>

                      <Link href='/#'>
                        <a className='page-numbers'>3</a>
                      </Link>

                      <Link href='/#'>
                        <a className='page-numbers'>4</a>
                      </Link>

                      <Link href='/#'>
                        <a className='next page-numbers'>
                          <i className='icofont-double-right'></i>
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

// export default BlogRightSidebar;
const cardRowsPerPage = 3;
const cardsPerPage = 9;

const defaultMapcenter = { lat: 12.8797, lng: 121.774 };
const defaultMapZoom = 5;

const FILTERS = [
  {
    groupName: 'CLIMATE HAZARD',
    toolTipText: 'Example Climate Hazard Tooltip Text',
    itemsType: 'checkbox',
    groupItems: ['Broad Climate Change Impact', 'Drought', 'Extreme Rainfall', 'Flood', 'Forest Fire'],
    value: '',
    hasSeeMore: true,
    isExpanded: false,
    seeMoreGroupItems: ['Example Item'],
  },
  {
    groupName: 'SECTOR',
    toolTipText: 'Example Sector Toiltip Text',
    itemsType: 'checkbox',
    groupItems: ['Agriculture', 'Biodiversity', 'Municipality / City'],
    value: '',
    hasSeeMore: true,
    isExpanded: false,
    seeMoreGroupItems: ['Example Item'],
  },
  {
    groupName: 'LOCATION',
    toolTipText: 'Example Location Toiltip Text',
    itemsType: 'doprdown',
    groupItems: ['Region', 'Province', 'Municipality / City'],
    value: {
      region: '',
      province: '',
      municipalityCity: '',
    },
    hasSeeMore: false,
    isExpanded: false,
    seeMoreGroupItems: [],
  },
  {
    groupName: 'SCALE OF USE',
    toolTipText: 'Example Scale of Use Toiltip Text',
    itemsType: 'checkbox',
    groupItems: ['Regional', 'Provincial', 'Municipality / City', 'Household'],
    value: '',
    hasSeeMore: false,
    isExpanded: false,
    seeMoreGroupItems: [],
  },
  {
    groupName: 'CCET INSTRUMENT',
    toolTipText: 'Example CCET Instrument Tooltip Text',
    itemsType: 'checkbox',
    groupItems: ['Policy & Governance', 'Research & Development', 'Knowledge and Capacity Building & Training', 'Action Delivery'],
    value: '',
    hasSeeMore: true,
    isExpanded: false,
    seeMoreGroupItems: ['Example Item'],
  },
  {
    groupName: 'Solution Type',
    toolTipText: 'Example Solution Type Toiltip Text',
    itemsType: 'checkbox',
    groupItems: ['Program', 'Project', 'Activity'],
    value: '',
    hasSeeMore: false,
    isExpanded: false,
    seeMoreGroupItems: [],
  },
];

const SOLUTIONS = [
  {
    title: 'Adopting Climate-Smart Agriculture practices or climate-smart intervent...',
    climateHazard: ['Extreme Rainfall'],
    sector: 'Agriculture',
    region: 'Soccsksargen',
    province: 'Sultan Kudarat',
    municipalityCity: 'Bagumbayan',
    position: { lat: 6.533, lng: 124.5631 },
    scaleOfUse: 'Regional',
    ccetInstrument: 'Action Delivery',
    solutionType: 'PROJECT',
    image: '/images/static/posts/post1.png',
  },
  {
    title: 'Las Kuatras Marias - Integrated Siversified Organic System',
    climateHazard: ['Drought'],
    sector: 'Agriculture',
    region: 'Mimaropa',
    province: 'Marinduque',
    municipalityCity: 'Boac',
    position: { lat: 13.3941, lng: 121.879 },
    scaleOfUse: 'Provincial',
    ccetInstrument: 'Knowledge and Capacity Building & Training',
    solutionType: 'PROGRAM',
    image: '/images/static/posts/post2.png',
  },
  {
    title: 'Climate Change Resilient Pilot House (CCRPH)',
    climateHazard: ['Broad Climate Change Impact'],
    sector: 'Biodiversity',
    region: 'Bicol',
    province: 'Albay',
    municipalityCity: 'Bacacay',
    position: { lat: 13.1775, lng: 123.528 },
    scaleOfUse: 'Municipality / City',
    ccetInstrument: 'Research & Development',
    solutionType: 'ACTIVITY',
    image: '/images/static/posts/post3.png',
  },
  {
    title: 'Water Harvesting Tank',
    climateHazard: ['Flood'],
    sector: 'Agriculture',
    region: 'Central Luzon',
    province: 'Bulacan',
    municipalityCity: 'Angat',
    position: { lat: 14.9968, lng: 121.171 },
    scaleOfUse: 'Household',
    ccetInstrument: 'Policy & Governance',
    solutionType: 'PROJECT',
    image: '/images/static/posts/post4.png',
  },
  {
    title: 'Adaptation to Climate Change among Farmers in Compostela Valley',
    climateHazard: ['Forest Fire', 'Flood'],
    sector: 'Agriculture',
    region: 'Davao',
    province: 'Compostela Valley',
    municipalityCity: 'Compostela',
    position: { lat: 7.5125, lng: 126.1763 },
    scaleOfUse: 'Household',
    ccetInstrument: 'Action Delivery',
    solutionType: 'ACTIVITY',
    image: '/images/static/posts/post5.png',
  },
  {
    title: 'Adopting Climate-Smart Agriculture practices or climate-smart intervent...',
    climateHazard: ['Extreme Rainfall'],
    sector: 'Agriculture',
    region: 'Soccsksargen',
    province: 'Sultan Kudarat',
    municipalityCity: 'Bagumbayan',
    position: { lat: 6.533, lng: 124.5631 },
    scaleOfUse: 'Regional',
    ccetInstrument: 'Action Delivery',
    solutionType: 'PROJECT',
    image: '/images/static/posts/post1.png',
  },
];

const renderFilters = (handleFilter, filters, setFilters, locationOptions, filterTooltipOpen, setFilterTooltipOpen) => {
  return filters.map((obj, idx) => (
    <div key={`${obj.groupName}-group-${idx}`}>
      <div style={{ height: '1rem' }} />
      <div className='d-flex align-items-center'>
        <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#646464' }}>{obj.groupName}</p>
        <Info style={{ marginLeft: '0.5rem', height: '18px', width: '18px', color: '#646464' }} id={`filter-tooltip-${idx}`} />
        <Tooltip
          placement='right'
          isOpen={filterTooltipOpen[`filter-tooltip-${idx}`]}
          target={`filter-tooltip-${idx}`}
          toggle={() => setFilterTooltipOpen({ ...filterTooltipOpen, [`filter-tooltip-${idx}`]: !filterTooltipOpen[`filter-tooltip-${idx}`] })}
        >
          {obj.toolTipText}
        </Tooltip>
      </div>
      {obj.groupItems.map((item, index) => (
        <div key={`${obj.groupName}-group-${idx}-item-${index}`}>
          {obj.itemsType === 'checkbox' ? (
            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center'>
                <Input
                  checked={filters[idx].value === item}
                  style={{ margin: '0 0.5rem 0 0' }}
                  type='checkbox'
                  onChange={() => {
                    let _filters = [...filters];
                    _filters[idx] = { ..._filters[idx], value: item === obj.value ? '' : item };
                    setFilters(_filters);

                    let _filterValues = _filters.map((x) => {
                      return x.value;
                    });
                    handleFilter(_filterValues);
                  }}
                />
              </div>
              <p style={{ margin: 0, fontSize: '18px', color: '#646464' }}>{item}</p>
            </div>
          ) : (
            (() => {
              let options = [];
              let key = '';

              switch (item) {
                case 'Region':
                  options = [...locationOptions.regions];
                  key = 'region';
                  break;
                case 'Province':
                  if (obj.value.region !== '') {
                    options = provinces.filter((x) => x.region === obj.value.region);
                    options = options.map((item) => {
                      let data = {
                        label: item.name,
                        value: item.code,
                      };
                      return data;
                    });
                  }
                  key = 'province';
                  break;
                default:
                  if (obj.value.province !== '') {
                    options = citiesMunicipalities.filter((x) => x.province === obj.value.province);
                    options = options.map((item) => {
                      let data = {
                        label: item.name,
                        value: item.code,
                      };
                      return data;
                    });
                  }
                  key = 'municipalityCity';
                  break;
              }
              return (
                <>
                  <Select
                    isClearable={true}
                    value={
                      obj.value[key] === ''
                        ? ''
                        : options.find((x) => {
                            return x.value === obj.value[key];
                          })
                    }
                    options={options}
                    onChange={(selected) => {
                      let _value = selected === null ? '' : selected.value;
                      let _filters = [...filters];
                      _filters[idx] = { ..._filters[idx], value: { ..._filters[idx].value, [key]: _value } };

                      setFilters(_filters);

                      let _filterValues = _filters.map((x) => {
                        return x.value;
                      });
                      handleFilter(_filterValues);
                    }}
                    placeholder={item}
                  />
                  <div style={{ height: '0.5rem' }} />
                </>
              );
            })()
          )}
        </div>
      ))}
      {obj.hasSeeMore && (
        <button
          style={{ backgroundColor: 'transparent', padding: 0, border: 'none', fontSize: '18px', fontWeight: 'bold', color: '#F5B100' }}
          onClick={() => {
            let _filters = [...filters];
            _filters[idx] = {
              ..._filters[idx],
              isExpanded: !_filters[idx].isExpanded,
            };

            let groupItems = [..._filters[idx].groupItems];
            let seeMoreGroupItems = [..._filters[idx].seeMoreGroupItems];

            if (_filters[idx].isExpanded) {
              _filters[idx] = {
                ..._filters[idx],
                groupItems: groupItems.concat(seeMoreGroupItems),
              };
            } else {
              groupItems = groupItems.filter((x) => {
                if (seeMoreGroupItems.includes(x)) return false;
                return true;
              });
              _filters[idx] = {
                ..._filters[idx],
                groupItems: groupItems,
              };
            }
            setFilters(_filters);
          }}
        >
          SEE {obj.isExpanded ? 'LESS' : 'MORE'}
        </button>
      )}
    </div>
  ));
};

const renderCards = (solutions, currentPage) => {
  const rows = [...Array(Math.ceil(solutions.length / 3))];

  let solutionsRows = rows.map((row, idx) => solutions.slice(idx * 3, idx * 3 + 3));

  solutionsRows = solutionsRows.slice(cardRowsPerPage * currentPage - 3, cardRowsPerPage * currentPage);

  const content = solutionsRows.map((row, idx) => {
    return (
      <Row style={{ marginBottom: '1rem' }} key={`row-${idx}`}>
        {row.map((card, index) => {
          return (
            <Col md={4} key={`row-${idx}-column-${index}`}>
              <div className='single-blog-item' style={{ height: '100%' }}>
                <div className='blog-image'>
                  <Link href='/blog-details'>
                    <a>
                      <img src={card.image} alt='image' />
                    </a>
                  </Link>

                  <div className='post-tag'>
                    <Link href='/#'>
                      <a
                        className={
                          card.solutionType === 'PROJECT'
                            ? 'project'
                            : card.solutionType === 'PROGRAM'
                            ? 'program'
                            : card.solutionType === 'ACTIVITY'
                            ? 'activity'
                            : null
                        }
                      >
                        {card.solutionType}
                      </a>
                    </Link>
                  </div>
                </div>

                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ padding: '1rem 1.5rem' }}>
                    <div className='info-head'>
                      <h2 style={{ color: '#0057A5', fontSize: '20px' }}>{card.title}</h2>
                    </div>

                    <div style={{ marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <img
                        src='/images/icons/featured/rainfall.png'
                        style={{ height: '28px', width: '28px', marginRight: '0.5rem' }}
                        alt='Service Image'
                      />
                      {/* <p style={{ margin: 0, }}> */}
                      {card.climateHazard.join(', ')}
                      {/* </p> */}
                    </div>
                    <div style={{ marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <img
                        src='/images/icons/featured/agriculture.png'
                        style={{ height: '28px', width: '28px', marginRight: '0.5rem' }}
                        alt='Service Image'
                      />
                      {card.sector}
                    </div>
                    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <img
                        src='/images/icons/featured/location.png'
                        style={{ height: '28px', width: '28px', marginRight: '0.5rem' }}
                        alt='Service Image'
                      />
                      {card.municipalityCity}, {card.province}, {card.region}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  });

  return content;
};

/** TODO:
 * - Fix Page Navigation Buttons. Currently, it will populate depending on the number of solutions. Each page shows 9 solutions.
 * - Replace GOOGLE_MAPS_API_KEY (Currently, we are using Ms. Joie's Personal Account for the API Key)
 * - (Optional) You can base your data model for the solutions using the object I made.
 */

const Solutions = () => {
  //   return <BlogRightSidebar />;

  const [searchText, setSearchText] = useState('');

  const [isMapVisible, setIsMapVisible] = useState(false);

  const [filters, setFilters] = useState([]);
  const [filterTooltipOpen, setFilterTooltipOpen] = useState({});

  const [locationOptions, setLocationOptions] = useState({ regions: [], provinces: [], citiesMunicipalities: [] });

  const [mapCenter, setMapCenter] = useState(defaultMapcenter);
  const [mapZoom, setMapZoom] = useState(defaultMapZoom);
  const [markers, setMarkers] = useState([]);
  const [showInfoWindow, setShowInfoWindow] = useState([]);

  const [defaultSolutions, setDefaultSolutions] = useState([]);
  const [solutions, setSolutions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    setDefaultSolutions(SOLUTIONS);
    setSolutions(SOLUTIONS);
    setFilters(FILTERS);

    const _regionsOptions = regions.map((item) => {
      let data = {
        label: item.name,
        value: item.code,
      };
      return data;
    });

    setLocationOptions({ ...locationOptions, regions: _regionsOptions });

    let provinces = [];

    let _markers = SOLUTIONS.map((item) => {
      let data = {};
      if (!provinces.includes(item.province)) {
        provinces.push(item.province);
        data = { province: item.province, position: item.position };
      }
      return data;
    });

    _markers = _markers.map((markerInfo) => {
      const _solutions = SOLUTIONS.filter((solution) => solution.province === markerInfo.province);
      return { ...markerInfo, solutionsCount: _solutions.length };
    });

    _markers = _markers.filter((item) => item.solutionsCount !== 0);

    setMarkers(_markers);
  };

  const handleSearch = (searchText, _solutions = null) => {
    setSearchText(searchText);
    searchText = searchText.trim().toLowerCase();

    let isSolutionsNull = true;

    if (_solutions) isSolutionsNull = false;

    _solutions = _solutions === null ? [...defaultSolutions] : _solutions;

    let _filterValues = filters.map((x) => {
      return x.value;
    });

    let hasFilterValue = false;
    hasFilterValue = _filterValues.some((filter) => {
      if (typeof filter === 'object') {
        return Object.keys(filter).some((key) => filter[key] !== '');
      } else {
        return filter !== '';
      }
    });

    if (searchText.trim() === '') {
      if (hasFilterValue && isSolutionsNull) {
        handleFilterSearch(_solutions, 'search then filter');
      } else {
        handleFilterSearch(_solutions, 'search');
      }
    } else {
      _solutions = _solutions.filter((item) => {
        let foundMatch = Object.keys(item).some((key) => {
          if (key !== 'position' && key !== 'image')
            if (typeof item[key] === 'string') {
              return item[key].toLowerCase().trim().includes(searchText);
            } else {
              return item[key].some((arrayItem) => {
                return arrayItem.toLowerCase().trim().includes(searchText);
              });
            }
        });
        return foundMatch;
      });
      if (hasFilterValue && isSolutionsNull) {
        handleFilterSearch(_solutions, 'search then filter');
      } else {
        handleFilterSearch(_solutions, 'search');
      }
    }
  };

  const handleFilter = (filterValues, _solutions = null) => {
    let isSolutionsNull = true;

    if (_solutions) isSolutionsNull = false;

    _solutions = _solutions === null ? [...defaultSolutions] : _solutions;

    let hasFilterValue = false;
    hasFilterValue = filterValues.some((filter) => {
      if (typeof filter === 'object') {
        return Object.keys(filter).some((key) => filter[key] !== '');
      } else {
        return filter !== '';
      }
    });

    if (hasFilterValue) {
      _solutions = _solutions.filter((solution) => {
        return filterValues.some((filter) => {
          if (typeof filter !== 'object') {
            return Object.keys(solution).some((key) => {
              if (key !== 'position') {
                if (Array.isArray(solution[key])) {
                  return solution[key].includes(filter);
                } else {
                  return solution[key].toLowerCase() === filter.toLowerCase();
                }
              }
            });
          } else {
            let _region = null;
            let _province = null;
            let _municipalityCity = null;

            _region = regions.find((region) => region.code === filter.region);
            _region = _region === undefined ? '' : _region.name;

            _province = provinces.find((province) => province.code === filter.province);
            _province = _province === undefined ? '' : _province.name;

            _municipalityCity = citiesMunicipalities.find((municipalityCity) => municipalityCity.code === filter.municipalityCity);
            _municipalityCity = _municipalityCity === undefined ? '' : _municipalityCity.name;

            if (filter.region !== '' && filter.province === '' && filter.province === '') {
              return solution.region === _region;
            } else if (filter.region !== '' && filter.province !== '' && filter.municipalityCity === '') {
              return solution.region === _region && solution.province === _province;
            } else if (filter.region !== '' && filter.province !== '' && filter.municipalityCity !== '') {
              return solution.region === _region && solution.province === _province && solution.municipalityCity === _municipalityCity;
            }
          }
        });
      });
    }

    if (searchText.trim() !== '' && isSolutionsNull) {
      handleFilterSearch(_solutions, 'filter then search');
    } else {
      handleFilterSearch(_solutions, 'filter');
    }
  };

  const handleFilterSearch = (_solutions, type) => {
    if (type === 'search') {
      setSolutions(_solutions);
    } else if (type === 'filter') {
      setSolutions(_solutions);
    } else if (type === 'search then filter') {
      let _filterValues = filters.map((x) => {
        return x.value;
      });
      handleFilter(_filterValues, _solutions);
    } else if (type === 'filter then search') {
      handleSearch(searchText, _solutions);
    }
  };

  return (
    <Container fluid style={{ padding: 0 }}>
      {/* <GooglePlacesAutocomplete apiKey={GOOGLE_MAPS_API_KEY} /> */}
      <div className='page-title-area solutions-bg'>
        <div className='d-table'>
          <div className='d-table-cell'>
            {/* <div className='container d-flex justify-content-center'> */}
            {/* <div className='d-flex flex-column align-items-start' style={{ width: '80%' }}> */}
            <h1 style={{ color: 'white' }}>Search Climate Solutions</h1>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div style={{ height: '4rem' }} />
      <Row style={{ padding: '0 5rem' }}>
        <Col md={3} style={{ paddingRight: '4rem' }}>
          <div className='w-100' style={{ position: 'relative' }}>
            <Input
              type='search'
              style={{ paddingLeft: '64px' }}
              //   placeholder='Search for climate hazard or solution keyword'
              placeholder='Search'
              value={searchText}
              onChange={(e) => {
                let searchText = e.target.value;

                handleSearch(searchText);
              }}
            />
            <Search style={{ position: 'absolute', left: 0, top: 0, margin: '15px 0 0 20px', color: '#6c757d' }} />
          </div>
          <div style={{ height: '1.5rem' }} />
          <button
            className='d-flex align-items-center'
            style={{ backgroundColor: 'transparent', padding: 0, border: 'none', fontSize: '24px', color: '#F5B100', fontWeight: 'bold' }}
            onClick={() => {
              let _filters = [...filters];
              _filters.forEach((filter) => {
                if (typeof filter.value === 'object') {
                  Object.keys(filter.value).forEach((filterKey) => {
                    filter.value[filterKey] = '';
                  });
                } else {
                  filter.value = '';
                }
              });

              setMapCenter(defaultMapcenter);
              setMapZoom(defaultMapZoom);
              setFilters(_filters);
              setIsMapVisible(!isMapVisible);
              setSolutions(defaultSolutions);
            }}
          >
            VIEW AS {isMapVisible ? 'LIST' : 'MAP'}
            <ArrowRight style={{ marginLeft: '0.5rem', height: '24px', width: '24px', color: '#F5B100' }} />
          </button>
          {renderFilters(handleFilter, filters, setFilters, locationOptions, filterTooltipOpen, setFilterTooltipOpen)}
        </Col>
        <Col md={9}>
          <div className='h-100 d-flex flex-column'>
            {isMapVisible && (
              <>
                <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                  <GoogleMap mapContainerStyle={{ height: '450px', width: '100%' }} center={mapCenter} zoom={mapZoom}>
                    {markers.map((item, idx) => (
                      <Marker
                        key={`marker-${idx}`}
                        position={item.position}
                        // label={`${item.solutionsCount}`}
                        onClick={() => {
                          let _solutions = [...defaultSolutions];
                          _solutions = _solutions.filter((x) => x.province === item.province);
                          let _showInfoWindow = { ...showInfoWindow };
                          Object.keys(_showInfoWindow).forEach((key) => {
                            if (key !== idx) _showInfoWindow[key] = false;
                          });
                          setMapCenter(item.position);
                          setMapZoom(10);
                          setShowInfoWindow({ ..._showInfoWindow, [idx]: !showInfoWindow[idx] });
                          setSolutions(_solutions);
                        }}
                      >
                        {showInfoWindow[idx] && (
                          <InfoWindow
                            style={{ backgroundColor: 'red' }}
                            key={`infoWindow-${idx}`}
                            position={item.position}
                            onCloseClick={() => {
                              setShowInfoWindow({ ...showInfoWindow, [idx]: !showInfoWindow[idx] });
                              setSolutions(defaultSolutions);
                            }}
                          >
                            <>
                              <p style={{ margin: 0, textAlign: 'center' }}>{item.province}</p>
                              <p style={{ margin: 0, textAlign: 'center' }}>Solutions: {item.solutionsCount}</p>
                            </>
                          </InfoWindow>
                        )}
                      </Marker>
                    ))}
                  </GoogleMap>
                </LoadScript>
                <div style={{ height: '1rem' }} />
              </>
            )}
            <div className='h-100 d-flex flex-column justify-content-between'>
              <div>{solutions.length === 0 ? <div>No Results</div> : renderCards(solutions, currentPage)}</div>
              <div className='pagination-area'>
                {(() => {
                  const pageButtonCount = 3;
                  let numberOfPages = solutions.length;
                  numberOfPages = numberOfPages / cardsPerPage;

                  numberOfPages = Math.ceil(numberOfPages);

                  if (numberOfPages === 1) {
                    return (
                      <span className={`page-numbers ${currentPage === 1 && 'current'}`} onClick={() => setCurrentPage(1)}>
                        1
                      </span>
                    );
                  }

                  let pages = [];

                  for (let page = 1; page <= numberOfPages; page++) {
                    pages.push(page);
                  }

                  return (
                    <>
                      <span
                        className='prev page-numbers'
                        style={{ backgroundColor: `${1 === currentPage ? 'lightgray' : ''}` }}
                        onClick={() => {
                          if (1 !== currentPage) setCurrentPage(currentPage - 1);
                        }}
                      >
                        <i className='icofont-double-left' style={{ color: `${1 === currentPage ? 'gray' : ''}` }}></i>
                      </span>
                      {pages.map((item, idx) => (
                        <span
                          key={`card-set-${item}`}
                          className={`page-numbers ${currentPage === item && 'current'}`}
                          onClick={() => setCurrentPage(item)}
                        >
                          {item}
                        </span>
                      ))}
                      <span
                        className='next page-numbers'
                        style={{ backgroundColor: `${pages.length === currentPage ? 'lightgray' : ''}` }}
                        onClick={() => {
                          if (pages.length !== currentPage) setCurrentPage(currentPage + 1);
                        }}
                      >
                        <i className='icofont-double-right' style={{ color: `${pages.length === currentPage ? 'gray' : ''}` }}></i>
                      </span>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ height: '4rem' }} />
    </Container>
  );
};

export default Solutions;
