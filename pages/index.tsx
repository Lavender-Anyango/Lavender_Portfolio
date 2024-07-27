import Head from 'next/head';
import { Introduction, Proficiency, Experience, Reviews } from '../components';

const Home = () => {
    return (
        <>
            <Head>
                <title>Lavender Anyango | Full Stack Developer - Home</title>
            </Head>
            <Introduction />
            <Proficiency />
            <Experience />
            <Reviews />
        </>
    );
};

export default Home;
