import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { LayoutContext } from '../../pages/_app';

/**
 * Wraps the page component with Global header and footer
 * @param {func} Component - the page component
 * @returns {function(*): JSX.Element}
 * @constructor
 */
const Layout = Component => {
    /**
     * Wrapper for the page component
     * @param {object} props - page props
     * @returns {JSX.Element}
     * @constructor
     */
    const Page = props => {
        const { header, footer } = useContext(LayoutContext);
        return (
            <div className="layout">
                <Header data={ header } />
                <main id="#main" className="page-wrapper">
                    <Component { ...props } />
                </main>
                <Footer data={ footer } />
            </div>
        )
    }

    return Page;
}

export default Layout;