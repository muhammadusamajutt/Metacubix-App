import React from 'react'
import Logo from '../../assests/logo/LOGO-2.png'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <>
            <div>

                <div className="container header">
                    <div className="row">
                        <div className=" d-flex justify-content-between">
                            <div><img src={Logo} className='logo' alt="logo" /></div>
                            <nav>
                                <ul className='d-flex'>
                                    <li><Link className='link' to="/">Home</Link></li>
                                    <li><Link className='link' to="/">About Us</Link></li>
                                    <li className='servics-hover link'><Link className='link' to="/">Servics</Link>
                                        <div className="container services-menu">
                                            <div className="row mt-3">
                                                <div className="col-lg-2">
                                                    <Link className='link-2'><div className='text-center boder-buttom'>Web Development</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Website Redesign</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Website Maintenance</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Custom API Development</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>CMS Development</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Ecommerce Website</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Web Application</div> </Link>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link className='link-2'><div className='text-center boder-buttom'>App Development</div></Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Android App</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>IOS App</div></Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Flutter App</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>React Native App</div> </Link>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link className='link-2'><div className='text-center boder-buttom'>Shopify Services</div></Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Shopify Store Development</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Shopify Integration</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Shopify Plus Development</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Themes Customization</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Shopify Migration Services</div> </Link>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link className='link-2'><div className='text-center boder-buttom'>UI/UX Design</div></Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Web UX/UI Design</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Mobile UX/UI Design</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'> Graphic Design</div></Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Branding</div> </Link>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link className='link-2'><div className='text-center boder-buttom'>WordPress Services</div></Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Website Development</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>Theme Customization</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'> Plugin Development</div></Link>
                                                    <Link className='link-2'><div className='sub-menue-text'>SEO Services</div> </Link>
                                                    <Link className='link-2'><div className='sub-menue-text'> Migration Services</div></Link>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <li><Link className='link' to="/">Portfolio</Link></li>
                                    <li><Link className='link' to="/">Blog</Link></li>
                                    <li><Link className='link' to="/">Contact US</Link></li>
                                </ul>
                            </nav>
                            <div><Link><button className="themeButton mt-2">Our Project</button></Link></div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
