import React, { useState } from 'react';
import Php from '../../assests/icons/Php-1.png'
import Laravel from '../../assests/icons/Laravel-1.png'
import NodeJs from '../../assests/icons/Node.png'
import Angular from '../../assests/icons/Angular-1.png'
import ReactJs from '../../assests/icons/React-2.png'
import Python from '../../assests/icons/Python-2.png'
import VueJS from '../../assests/icons/Vue-JS-2.png'
import Java from '../../assests/icons/Java-1.png'
import Flutter from '../../assests/icons/Flutter-1.png'
import Kotlin from '../../assests/icons/Kotlin-1.png'
import Photoshop from '../../assests/icons/Ps.png'
import illustrator from '../../assests/icons/Ai.png'
import Figma from '../../assests/icons/Figma-1.png'
import XD from '../../assests/icons/XD.png'
const TabContentOne = () => (
    <div className="container tabs-home">
        <div className="row icons-tec">
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Php} alt="PHP" />
                <div className="technology-text text-center">PHP</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Laravel} alt="Laravel" />
                <div className="technology-text text-center">Laravel</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={NodeJs} alt="Node.Js" />
                <div className="technology-text text-center">Node.Js</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Angular} alt="Angular" />
                <div className="technology-text text-center">Angular</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={ReactJs} alt="React.Js" />
                <div className="technology-text text-center">React.Js</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Python} alt="Python" />
                <div className="technology-text text-center">Python</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={VueJS} alt="VueJS" />
                <div className="technology-text text-center">VueJS</div>
            </div>
        </div>
    </div>
);

const TabContentTwo = () => (
    <div className="container tabs-home">
        <div className="row icons-tec">
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Java} alt="Java" />
                <div className="technology-text text-center">Java</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Flutter} alt="Flutter" />
                <div className="technology-text text-center">Flutter</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={ReactJs} alt="React" />
                <div className="technology-text text-center">React</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Kotlin} alt="Kotlin" />
                <div className="technology-text text-center">Kotlin</div>
            </div>
        </div>
    </div>
);

const TabContentThree = () => (
    <div className="container tabs-home">
        <div className="row icons-tec">
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Photoshop} alt="Photoshop" />
                <div className="technology-text text-center">Photoshop</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={illustrator} alt="illustrator" />
                <div className="technology-text text-center">illustrator</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={Figma} alt="Figma" />
                <div className="technology-text text-center">Figma</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-center text-hover-hover">
                <img className="technology-icon text-center" src={XD} alt="XD" />
                <div className="technology-text text-center">XD</div>
            </div>
        </div>
    </div>
);

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Web Technology', 'Mobile Technology', 'UI/UX Desgin'];
    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    return (
        <>
            <div className='tabs-home container'>
                <ul className="tabs">
                    {tabs.map((tab, index) => (
                        <li
                            key={index}
                            className={activeTab === index ? 'active-tab' : ''}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <ul className="tabs-content">
                    {activeTab === 0 && <TabContentOne />}
                    {activeTab === 1 && <TabContentTwo />}
                    {activeTab === 2 && <TabContentThree />}
                </ul>
            </div>
        </>
    );
};

export default Tabs;
