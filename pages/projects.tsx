import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import aydmedia from '../asset/aydmedia.png';
import Link from 'next/link';
import { projectData } from '../data/data';

const projects = () => {
    return (
        <>
            <Head>
                <title>Alimazoya | Full Stack Developer - Projects</title>
            </Head>
            <div className="projects">
                <div className="proficiency_title">Projects</div>
                <div className="intro_name_bar"></div>
                <div className="projects_container">
                    {projectData.map((item) => (
                        <div className="project" key={item.id}>
                            <div className="project_name">Project name</div>
                            <div className="project_img">
                                <Link href="https://davidalimazo.github.io/portfolio.github.io/">
                                    <Image src={aydmedia} width={500} height={305} alt="aydmedia" />
                                </Link>
                            </div>
                            <div className="project_btns">
                                <button>Source Code</button>
                                <button style={{ background: 'rgba(97, 94, 214, 0.18)' }}>solo</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default projects;
