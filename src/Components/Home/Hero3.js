import React, { useState } from 'react';
import { Tab, Nav, Accordion, Card, useAccordionButton } from 'react-bootstrap';
const CustomToggle = ({ children, eventKey, callback }) => {
    const [active, setActive] = useState(false);
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        setActive(!active);
        if (callback) callback();
    });

    return (
        <div onClick={decoratedOnClick} className={`custom-accordion-header ${active ? 'active' : ''}`}>
            {children}
            <span className="accordion-icon">{active ? '' : ''}</span>
        </div>
    );
};

export default function Hero3() {
    const [activeKey, setActiveKey] = useState('mission');
    return (
        <>
            <div className="container hero3">
                <div className="row common-margin">
                    <h2 className='text-center'>Boost your business up to new heights with<span> Metacubix.</span></h2>
                </div>
            </div>
            <div className="container my-5 hero3">
                <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                    <div className="row">
                        <div className="col-md-3 d-none d-md-block">
                            <Nav variant="pills" className="flex-column custom-tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="mission">Our Mission</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="vision">Our Vision</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="destination">Our Destination</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="goal">Our Goal</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="achievement">Our Achievement</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="col-md-9 d-none d-md-block customize">
                            <Tab.Content>
                                <Tab.Pane eventKey="mission">
                                    <h2>Our Mission at Metacubix</h2>
                                    <p>Our primary marketing mission at Metacubix is to identify the core purpose and objectives of your marketing efforts.</p>
                                    <ol>
                                        <li>Understanding Your Business Objectives: We strive to thoroughly understand your business objectives to align our marketing strategies effectively.</li>
                                        <li>Identifying Your Target Audience: Metacubix focuses on identifying your target audience, ensuring that our marketing efforts resonate with the right demographic.</li>
                                    </ol>
                                </Tab.Pane>
                                <Tab.Pane eventKey="vision">
                                    <h2>Our Vision at Metacubix</h2>
                                    <p>At Metacubix, our vision is centered around defining the core purpose and objectives of your marketing efforts.</p>
                                    <ol>
                                        <li>Understanding Your Business Objectives We are committed to understanding your business objectives thoroughly to tailor our marketing strategies accordingly.</li>
                                        <li>Identifying Your Target Audience Metacubix specializes in identifying your target audience, ensuring that our marketing initiatives are precisely targeted for maximum impact.</li>
                                    </ol>
                                </Tab.Pane>
                                <Tab.Pane eventKey="destination">
                                    <h2>Our Destination at Metacubix</h2>
                                    <p>In our journey with you, our destination is to define the core purpose and objectives of your marketing efforts, ensuring your success.</p>
                                    <ol>
                                        <li>Understanding Your Business Objectives Metacubix is dedicated to understanding your business objectives comprehensively, allowing us to align our strategies effectively with your goals.</li>
                                        <li>Identifying Your Target Audience We specialize in identifying your target audience, ensuring that every marketing initiative is tailored to resonate with your desired demographic.</li>
                                    </ol>
                                </Tab.Pane>
                                <Tab.Pane eventKey="goal">
                                    <h2>Our Goal at Metacubix</h2>
                                    <p>At Metacubix, our goal is to define the core purpose and objectives of your marketing efforts, ensuring alignment with your overall business objectives.</p>
                                    <ol>
                                        <li>Understanding Your Business Objectives We prioritize understanding your business objectives to tailor our marketing strategies effectively and drive tangible results.</li>
                                        <li>Identifying Your Target Audience Metacubix excels in identifying your target audience, enabling us to craft targeted marketing campaigns that resonate with your ideal customers.</li>
                                    </ol>
                                </Tab.Pane>
                                <Tab.Pane eventKey="achievement">
                                    <h2>Our Achievement at Metacubix</h2>
                                    <p>At Metacubix, our achievement lies in defining the core purpose and objectives of your marketing endeavors.</p>
                                    <ol>
                                        <li>Understanding Your Business Objectives We excel in understanding your business objectives to ensure that our marketing strategies are aligned with your overarching goals.</li>
                                        <li>Identifying Your Target Audience Metacubix is adept at identifying your target audience, enabling us to tailor our marketing campaigns to resonate with your desired demographic.</li>
                                    </ol>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>

                        {/* Accordion for small screens */}
                        <div className="col-12 d-md-none border-none">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <CustomToggle activeKey="0" eventKey="0">Our Mission</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <h2>Our Mission at Metacubix</h2>
                                            <p>Our primary marketing mission at Metacubix is to identify the core purpose and objectives of your marketing efforts.</p>
                                            <ol>
                                                <li>Understanding Your Business Objectives: We strive to thoroughly understand your business objectives to align our marketing strategies effectively.</li>
                                                <li>Identifying Your Target Audience: Metacubix focuses on identifying your target audience, ensuring that our marketing efforts resonate with the right demographic.</li>
                                            </ol>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="1">Our Vision</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <h2>Our Vision at Metacubix</h2>
                                            <p>At Metacubix, our vision is centered around defining the core purpose and objectives of your marketing efforts.</p>
                                            <ol>
                                                <li>Understanding Your Business Objectives We are committed to understanding your business objectives thoroughly to tailor our marketing strategies accordingly.</li>
                                                <li>Identifying Your Target Audience Metacubix specializes in identifying your target audience, ensuring that our marketing initiatives are precisely targeted for maximum impact.</li>
                                            </ol>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="2">Our Destination</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <h2>Our Destination at Metacubix</h2>
                                            <p>In our journey with you, our destination is to define the core purpose and objectives of your marketing efforts, ensuring your success.</p>
                                            <ol>
                                                <li>Understanding Your Business Objectives Metacubix is dedicated to understanding your business objectives comprehensively, allowing us to align our strategies effectively with your goals.</li>
                                                <li>Identifying Your Target Audience We specialize in identifying your target audience, ensuring that every marketing initiative is tailored to resonate with your desired demographic.</li>
                                            </ol>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="3">Our Goal</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <h2>Our Goal at Metacubix</h2>
                                            <p>At Metacubix, our goal is to define the core purpose and objectives of your marketing efforts, ensuring alignment with your overall business objectives.</p>
                                            <ol>
                                                <li>Understanding Your Business Objectives We prioritize understanding your business objectives to tailor our marketing strategies effectively and drive tangible results.</li>
                                                <li>Identifying Your Target Audience Metacubix excels in identifying your target audience, enabling us to craft targeted marketing campaigns that resonate with your ideal customers.</li>
                                            </ol>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="4">Our Achievement</CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <h2>Our Achievement at Metacubix</h2>
                                            <p>At Metacubix, our achievement lies in defining the core purpose and objectives of your marketing endeavors.</p>
                                            <ol>
                                                <li>Understanding Your Business Objectives We excel in understanding your business objectives to ensure that our marketing strategies are aligned with your overarching goals.</li>
                                                <li>Identifying Your Target Audience Metacubix is adept at identifying your target audience, enabling us to tailor our marketing campaigns to resonate with your desired demographic.</li>
                                            </ol>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </>
    )
}
