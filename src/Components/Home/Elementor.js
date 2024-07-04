import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faBullhorn, faUsers, faSmile } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const stats = [
    { icon: faProjectDiagram, count: 50, label: 'PROJECTS' },
    { icon: faBullhorn, count: 20, label: 'MEDIA ACTIVITIE' },
    { icon: faUsers, count: 10, label: 'SKILLED EXPERTS' },
    { icon: faSmile, count: 30, label: 'HAPPY CLIENTS' },
];

const StatsSection = () => {
    return (
        <div className="container statsSection" >
            <div className='row common-margin'>
                {stats.map((stat, index) => (
                    <div key={index} className='col-lg-3 d-flex ionic mb-3 ps-5'>
                        <div className='icon-backgroung'>
                            <FontAwesomeIcon className='icons' icon={stat.icon} size="2x" color="white" />
                        </div>
                        <div className='text-side'>
                            <h2 className="countNumber"> <CountUp end={stat.count} duration={3} /></h2>
                            <div className='text-text'>{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
