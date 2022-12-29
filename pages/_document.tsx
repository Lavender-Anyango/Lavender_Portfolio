import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <meta name="description" content="Alimazoya David portfolio page with NextJS" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Alimazoya David" />
            <meta name="keywords" content="Alimazoya-David NextJS React Frontend Developer" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
