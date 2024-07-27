import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';
import { usePathname } from 'next/navigation';
import { navbar } from '../data/data';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import useWindowSize from '../hooks/useWindowSize';

export default function Navbar() {
    const width = useWindowSize();
    const [isMobile, setIsMobile] = useState(false);
    const router = usePathname();
    const isActive = (route: string) => {
        if (route === router) {
            return 'navbarActive';
        }
        return '';
    };
    const closeMobileMenuOnClick = () => {
        if (width < 769) setIsMobile(!isMobile);
    };
    return (
        <div className="ixed_top" id={styles.header}>
            <div className="container">
                <h1 className="logo">
                    <Link href="/">Lavender Anyango</Link>
                </h1>
                <nav className="nav">
                    <ul className="nav_menu">
                        {navbar.map((item) => (
                            <li className="li" key={item.id}>
                                <Link href={item.link} className={`${isActive(item.link)} link`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <span className={`mobileMenu ${isMobile && 'isMobileActive'}`}>
                    {isMobile ? <CloseIcon onClick={() => setIsMobile(!isMobile)} /> : <MenuIcon onClick={() => setIsMobile(!isMobile)} />}
                </span>
                <div className={`hideDiv ${isMobile ? 'mobile_container' : 'closeMobile'}`}>
                    <div className="innerNav">
                        {navbar.map((item) => (
                            <Link href={item.link} key={item.id} className={`${isActive(item.link)} link sm`} onClick={closeMobileMenuOnClick}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
