import type { AppProps } from 'next/app';
import { Layouts } from '../components';
import '../styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layouts>
            <Component {...pageProps} />
        </Layouts>
    );
}
