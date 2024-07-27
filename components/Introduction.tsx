import Image from 'next/image';
import styles from '../styles/Intro.module.css';
import emailIcon from '../asset/email.png';
import linkedinIcon from '../asset/linkedin.png';
import githubIcon from '../asset/github.png';
import Button from './Button';
import Link from 'next/link';
import { MdLocalPostOffice } from 'react-icons/md';

export default function Introduction() {
    return (
        <div className="intro_container">
            <div className="intro_left">
                <div className="intro_left_intro_text">HI THERE👋🏻</div>
                <div className="intro_name">Lavender Anyango</div>
                <div className="intro_name_bar"></div>
                <div className="inro_view_cv">
                    <Button
                        text="View CV"
                        isLink={true}
                        link="https://docs.google.com/document/d/1j7rAYYci5q39VPb33H5zuhEqyciprz2yw2Nn9IKokCw/edit?usp=sharing"
                    />
                </div>
            </div>
            <div className="intro_right">
                <div className="intro_right_intro_text">INTRODUCTION</div>
                <div className="intro_right__title">Software Engineer, Fullstack Developer, based in Nairobi, Kenya.</div>
                <div className="intro_right_main_text">
                    Innovative full-stack developer with over a year of hands-on experience in building dynamic and efficient web applications.
                    Proficient in JavaScript, Python, and C, with a proven track record of crafting high-quality, scalable code for impactful
                    projects. Eager to leverage cutting-edge technologies and methodologies while continually expanding my skill set and adapting to
                    new challenges in a collaborative, fast-paced environment
                </div>
                <div className="intro_right_social_icons">
                    <Link href="https://github.com/ven8462">
                        {' '}
                        <Image src={githubIcon} height={23} width={23} alt="github icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lavender-anyango-a24a2a2b2/">
                        <Image src={linkedinIcon} height={23} width={23} alt="linkedin icon" />
                    </Link>
                    <Link href="anyangolavenderr@gmail.com">
                        <MdLocalPostOffice fontSize="33px" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
