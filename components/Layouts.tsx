import { Navbar } from './index';
import styles from '../styles/Home.module.scss';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layouts({ children }: LayoutProps) {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.wrapper}>
                <Navbar />
                <div className="main_body_container">{children}</div>
            </div>
            <div className="footer">
                <div>
                    Copyright {new Date().getFullYear()} <span>@alimazoyadavid</span>
                </div>
            </div>
        </div>
    );
}
