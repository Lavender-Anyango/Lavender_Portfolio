import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';
import { projectData } from '../data/data';

const projects = () => {
    return (
        <>
            <Head>
                <title>Lavender | Full Stack Developer - Projects</title>
            </Head>
            <div className="projects">
                <div className="proficiency_title">Projects</div>
                <div className="intro_name_bar"></div>
                <div className="projects_container">
                    {projectData.map((item) => (
                        <div className="project" key={item.id}>
                            <div className="project_name">{item.name}</div>
                            <div className="project_img">
                                <Link href={item.link}>
                                    <Image src={item.img} alt={item.name} priority={true} />
                                </Link>
                            </div>
                            <div className="project_btns">
                                <button disabled={item.disabled} style={{ opacity: item.disabled ? 0.3 : 1 }}>
                                    <Link href={item.repo}>
                                        <AiOutlineGithub style={{ marginRight: '10px' }} /> Source Code
                                    </Link>
                                </button>
                                <button disabled={true} style={{ background: 'rgba(97, 94, 214, 0.18)' }}>
                                    {item.collabo}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default projects;
