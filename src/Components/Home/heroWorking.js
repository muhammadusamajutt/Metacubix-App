import React from 'react'
import Plan from "../../assests/icons/icons8-plan-100 (1).png"
import Cost from "../../assests/icons/icons8-cost-96.png"
import Growth from "../../assests/icons/icons8-growth-100.png"
import Success from "../../assests/icons/icons8-succes-67.png"

export default function heroWorking() {
    return (
        <>
            <div className="container heroWorking">
                <div className="row common-margin">
                    <h1 className='text-center'>Our Working Process</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 mb-4 border-hover">
                        <div className="text-center"><div className="icon-div"><img className='icon-image0' src={Plan} alt="" /></div></div>
                        <h6 className='text-center working-heading'>Make a Plan</h6>
                        <div className="text-center working-text">Craft a strategic plan for success with Metacubix, leveraging our expertise to outline actionable steps tailored to achieve your business goals and objectives.</div>
                    </div>
                    <div className="col-lg-3 mb-4 border-hover">
                        <div className="text-center"><div className="icon-div"><img className='icon-image0' src={Cost} alt="" /></div></div>
                        <h6 className='text-center working-heading'>Cost Calculating</h6>
                        <div className="text-center working-text">Calculate costs accurately and efficiently with Metacubix, ensuring transparent pricing and budgeting to optimize your financial resources for maximum</div>
                    </div>
                    <div className="col-lg-3 mb-4 border-hover">
                        <div className="text-center"><div className="icon-div"><img className='icon-image0' src={Growth} alt="" /></div></div>
                        <h6 className='text-center working-heading'>Business Growth</h6>
                        <div className="text-center working-text">Fuel your business growth with Metacubix, where innovative strategies and tailored solutions drive sustainable expansion and success in the ever-evolving</div>
                    </div>
                    <div className="col-lg-3 mb-4 border-hover">
                        <div className="text-center"><div className="icon-div"><img className='icon-image01' src={Success} alt="" /></div></div>
                        <h6 className='text-center working-heading'>Success Mission</h6>
                        <div className="text-center working-text">Embark on a journey towards success with Metacubix's mission-driven approach, where every endeavor is guided by a commitment to achieving your</div>
                    </div>
                </div>
            </div>
        </>
    )
}
