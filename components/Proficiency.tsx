import React from 'react';
import styles from '../styles/Proficiency.module.css';
import { proficiency, skillsData } from '../data/data';
import Image from 'next/image';
import { Button } from './index';

const Proficiency = () => {
    return (
        <div className="proficiency">
            <div className="proficiency_title">Proficiency</div>
            <div className="intro_name_bar"></div>
            <div className="proficiency_main_text">
                Experienced Full-Stack Developer with a demonstrated history of working in the financial service industry. Skilled in diverse
                programming languages such as JavaScript, Typescript, Java and Dart, a great team player with proven broad knowledge of technologies that
                can enable and facilitate ease of project development, deployment, maintenance and support of software systems which will enable
                innovative products function and scale maximally.
            </div>
            <div className="proficiency_areas">
                {proficiency.map((item) => (
                    <div className="proficiency_area_box" key={item.id}>
                        <Image src={item.icon} height={45.2} width={41.1} alt={item.name} />
                        <p>{item.details}</p>
                    </div>
                ))}
            </div>
            <div className="proficiency_button">
                <Button text="View Github Profile" link="https://github.com/Davidalimazo" isLink={true} />
            </div>
            <div className="proficiency_skills">
                <div className="main_skills_container">
                    <div className="ul_skills_container">
                        <div className="proficiency_skills_title">Skills</div>
                        <div className="ul_skills_body">
                            {skillsData.map((ul, i) => (
                                <ul className="table_skills" key={i}>
                                    {ul.map((skill) => (
                                        <li key={skill.id}>{skill.name}</li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proficiency;
