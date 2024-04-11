import React from "react";

const Footer = (props) => {
    return (
        <>
            <footer classNameName="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4  menu-footer-one">
                            <a href="#" className="logo-footer">
                                <img src={require('../../assets/images/nailsspalogo.png')} alt="" />
                            </a>
                            <ul className="footer-list no-bullets">
                                <li>
                                    <span className="icon">
                                        <i className="ti-home" aria-hidden="true"></i>
                                    </span>
                                    <p>Address: S1515 SE 17th St #109
                                        Fort Lauderdale, Florida 33316</p>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                    </span>
                                    <p>
                                        Phone:
                                        <a href="tel:(+84)934 323 882">(469) 919-0777</a>
                                    </p>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i className="ti-email" aria-hidden="true"></i>
                                    </span>
                                    <p>
                                        Email :
                                        <a href="mailto: support@suplo.vn">doradonailbarforney@gmail.com</a>
                                    </p>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i className="ti-world" aria-hidden="true"></i>
                                    </span>
                                    <p>
                                        Website :
                                        <a href="https://doradonailbarforney.com">doradonailbarforney.com</a>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4 menu-footer menu-footer-two">
                            <h3 className="menu-link">Location</h3>
                            <div className="footer-list content">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14331.68875213!2d-80.1267145!3d26.1014586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20dd4fa1dc5a0c79!2sUltimate+Nail+Spa!5e0!3m2!1sen!2s!4v1522055244983"
                                    width="300" height="250">
                                    <p>Your browser does not support iframes.</p>
                                </iframe>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4 menu-footer menu-footer-three">
                            <h3 className="menu-link">Hours of Operation</h3>
                            <div className="footer-list content">
                                <ul className="homehours">
                                    <li>Mon-Sat: 10:00 am - 7:30 pm </li>
                                    <li>Sun: 11:00 am - 5:00 pm </li>
                                </ul>
                                <div className="weaccept">
                                    <h3>We Accept:</h3>
                                    <div className="lstbank">
                                        <img src={require('../../assets/images/social/visa.png')} alt="visa" />
                                        <img src={require('../../assets/images/social/master.png')} alt="master" />
                                        <img src={require('../../assets/images/social/discover.png')} alt="discover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section id="footer-info" className="footer-info">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="footer-bottom-contact">
                                    Copyrights © 2024 by <a target="_blank" href="#"> Dorado Nail Bar.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Footer;