import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../assests/img/web-d-e1719053554202-768x577.png'

export default function Hero2() {
    return (
        <>
            <div className="container hero2">
                <div className="row common-margin">
                    <div className="col-lg-6 flex-site mb-3">
                        <h1 className="text-center">Metacubix provides IT support for businesses</h1>
                        <p className="text-center">
                            Metacubix is committed to being your trusted source for comprehensive IT services worldwide. With a dedicated focus on preparing for your success, we provide tailored solutions to meet your unique business needs and objectives.
                        </p>
                        <div className="text-center common-margin">
                            <Link className="btn themeButton">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Image1} alt="" className="image-d" />
                    </div>
                </div>
            </div>
        </>
    )
}
