import React from 'react'
// import Shop from '../../assests/icons/shopping-cart.png'
// import AppDev from '../../assests/icons/application.png'
// import WordPress from '../../assests/icons/wordpress-logo.png'
// import WebDev from '../../assests/icons/web-design.png'
// import UiUx from '../../assests/icons/ux-interface.png'
// import Branding from '../../assests/icons/branding.png'
// import Graph from '../../assests/icons/web-design.png'
// import Cms from '../../assests/icons/technology.png'
// import WebApp from '../../assests/icons/application.png'
import { Link } from 'react-router-dom'

export default function heroServics() {
    return (
        <>
            <div className="container hero-servics">
                <div className="rom common-margin">
                    <h1 className='text-center'>Our Services</h1>
                    <p className='text-center'>At Metacubix, we bring years of expertise, strong technical know-how, and a keen eye for design as seasoned experts, graphic designers, and web developers. Our core skills encompass design, development, and the creation of printed and promotional materials. Below is a list of our comprehensive services:</p>
                </div>
                <div className="row common-margin">
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={Shop} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>Shopify Services</Link>
                                <div className='sub-text'>Shopify empowers businesses to explore scalable opportunities tailored to their customers' needs, delving into a vast ecosystem. At Metacubix, we specialize in navigating this</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={AppDev} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>App Development</Link>
                                <div className='sub-text'>As mobile technology advances, the demand for innovative and functional mobile apps continues to rise. At Metacubix, we specialize in iOS and Android development, providing top-</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={WordPress} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>WordPress Services</Link>
                                <div className='sub-text'>Metacubix offers a comprehensive range of WordPress services to meet your website needs. From custom theme development to plugin integration, our team ensures</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={WebDev} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>Web Development</Link>
                                <div className='sub-text'>In today’s digital age, Web Development is imperative for businesses and organizations striving to stay competitive, engage customers, and navigate evolving market trends.</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={UiUx} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>UI/UX Website Design</Link>
                                <div className='sub-text'>UX Design, or User Experience Design, focuses on optimizing user interaction with a product, while UI Design, or User Interface Design, emphasizes the visual layout and aesthetics. Both are</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={Branding} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>Branding</Link>
                                <div className='sub-text'>Metacubix specializes in Brand Development & Design Services, crafting distinctive brand identities and corporate recognition. Our expert designers are here to assist you in realizing</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={Graph} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>Graphic Design</Link>
                                <div className='sub-text'>Metacubix specializes in Graphic Design, understanding that a unique and distinctive logo is essential for setting your brand apart from competitors. Our focus-based quality branding</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={Cms} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>CMS Development</Link>
                                <div className='sub-text'>Metacubix specializes in CMS development, leveraging the latest technology to create and manage online content effectively. As digital content becomes increasingly essential</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className='servics-card d-flex mb-4 icon-adjust'>
                            {/* <div><img className='icon1' src={WebApp} alt="" /></div> */}
                            <div className='margin servics-card-text ms-2'>
                                <Link className='heading-text'>Web Applications</Link>
                                <div className='sub-text'>Metacubix specializes in developing web applications that enable businesses to communicate more effectively and efficiently with their customers. Our solutions make it easier to track and measure data,</div>
                            </div>
                            <Link className='icon-arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
