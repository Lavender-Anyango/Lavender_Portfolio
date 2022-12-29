import Head from 'next/head';
import { Introduction, Proficiency, Experience, Reviews } from '../components';

const Home = () => {
    return (
        <>
            <Head>
                <title>Alimazoya | Full Stack Developer - Home</title>
            </Head>
            <Introduction />
            <Proficiency />
            <Experience />
            <Reviews />
        </>
    );
};

export default Home;
