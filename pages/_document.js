import Document, { Html, Head, Main, NextScript } from 'next/document';
import PrismicScript from '@components/prismic/PrismicScript';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body style={{ overflow: 'hidden' }}>
                    <Main />
                    <NextScript />
                    <PrismicScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument