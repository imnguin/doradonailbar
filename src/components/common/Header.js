import React from "react";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="logo">
                                <a href="#">
                                    <span className="img-logo"></span>
                                    <span className="text-logo">Dorado Nail Bar</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-8">
                            <div className="menu-top">
                                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                                    <div className="navbar-collapse">
                                        <ul className="navbar-nav mr-auto no-bullets">
                                            <li className="menu-item">
                                                <img src={require('../../assets/images/qr.jpg')} className="qr-img" height="70" alt="" />
                                            </li>
                                            <li className="menu-item">
                                                <img src={require('../../assets/images/qr.jpg')} className="qr-img" height="70" alt="" />
                                            </li>
                                            <li className="menu-item">
                                                <img src={require('../../assets/images/qr.jpg')} className="qr-img" height="70" alt="" />
                                            </li>
                                            <li className="menu-item">
                                                <img src={require('../../assets/images/qr.jpg')} className="qr-img" height="70" alt="" />
                                            </li>
                                            <li className="menu-item">
                                                <img src={require('../../assets/images/qr.jpg')} className="qr-img" height="70" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;