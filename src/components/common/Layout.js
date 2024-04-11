import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    if (props.layout === 'pagenotfound') {
        return (
            props.children
        );
    }
    else {
        return (
            <>
                <Header />
                {
                    props.children
                }
                <Footer />
            </>
        );
    }
}

export default Layout;