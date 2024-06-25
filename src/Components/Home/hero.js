import React from 'react'
import Image1 from '../../assests/img/PNG-e1719051365791-768x701.webp'
import Icon1 from '../../assests/icons/support_agent_24dp_FILL0_wght400_GRAD0_opsz24.png'
import Icon2 from '../../assests/icons/diversity_3_24dp_FILL0_wght400_GRAD0_opsz24.png'
import Icon3 from '../../assests/icons/manage_accounts_24dp_FILL0_wght400_GRAD0_opsz24.png'
import Icon4 from '../../assests/icons/hub_24dp_FILL0_wght400_GRAD0_opsz24.png'
import Icon5 from '../../assests/icons/call_20dp_FILL0_wght400_GRAD0_opsz20.png'
import { Link } from 'react-router-dom'
export default function hero() {
    return (
        <>
            <div className="container hero">
                <div className="row common-margin">
                    <h6 className='text-center'>BEST SOFTWARE COMPANY</h6>
                    <h1 className='text-center'>Metacubix offers the perfect solution for you.</h1>
                </div>
                <div className="row mt-5 ">
                    <div className="col-lg-5 img-flex"><img className='image1' src={Image1} alt="" /></div>
                    <div className="col-lg-7">
                        <div className='row ms-4 margin-buttom'>
                            <div className="col-lg-6 mb-2">
                                <div>
                                    <div className="bg-icon"><img className='icon1' src={Icon1} alt="" /></div>
                                    <div className='margin'>
                                        <Link className='heading-text'>24/7 Call Services</Link>
                                        <div className='sub-text'>Experience seamless 24/7 call services with Metacubix, ensuring uninterrupted support and assistance for your business needs.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2 ">
                                <div>
                                    <div className="bg-icon"><img className='icon1' src={Icon2} alt="" /></div>
                                    <div className='margin'>
                                        <Link className='heading-text'>Team Members</Link>
                                        <div className='sub-text'>Meet the dedicated team members at Metacubix, each bringing unique expertise and passion to drive your business forward.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row ms-4 mt-5'>
                            <div className="col-lg-6 mb-2">
                                <div>
                                    <div className="bg-icon"><img className='icon1' src={Icon3} alt="" /></div>
                                    <div className='margin'>
                                        <Link className='heading-text'>Best Service</Link>
                                        <div className='sub-text'>Experience the pinnacle of excellence with Metacubix's best-in-class services, tailored to meet your every need and exceed your expectations.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2 ">
                                <div>
                                    <div className="bg-icon"><img className='icon1' src={Icon4} alt="" /></div>
                                    <div className='margin'>
                                        <Link className='heading-text'>Productive Work</Link>
                                        <div className='sub-text'>Achieve unparalleled productivity with Metacubix, where every project is executed with precision and efficiency to drive impactful results for your business.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row mt-5 text-center">
                            <div className="col-lg-6 mb-5">
                                <Link><button className="themeButton">Contact Us</button></Link>
                            </div>
                            <div className="col-lg-6 mb-2">
                                <div className="bg-icon d-sm-none d-md-block d-lg-block me-4"><img className='icon2' src={Icon5} alt="" /></div>
                                <div>
                                    <div className='anytime'>Call us anytime</div>
                                    <div className='any-number'>+92 3211601862</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
