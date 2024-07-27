import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { experienceData } from '../data/data';

const Experience = () => {
    return (
        <div className="experience">
            <div className="proficiency_title">Education</div>
            <div className="intro_name_bar"></div>
            <div className="experience_timeline_container">
                <VerticalTimeline lineColor="linear-gradient(8.53deg, rgba(97, 94, 214, 0.17) 73.83%, rgba(92, 98, 125, 0) 97.07%)">
                    {experienceData.map((item) => (
                        <VerticalTimelineElement
                            key={item.id}
                            className="vertical-timeline-element--education"
                            date={item.date}
                            iconStyle={{ background: '#000', color: '#fff', fontSize: '10px' }}
                            iconClassName="experience_icon_style"
                            textClassName="experience_icon_style"
                            contentArrowStyle={{ background: 'rgba(97, 94, 214, 0.15)' }}
                            contentStyle={{ background: 'rgba(97, 94, 214, 0.15)', color: '#fff', width: '280px' }}
                            icon={<HiBuildingOffice2 />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                            <p>{item.details}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experience;
