import React from "react";

const Home = (props) => {
    return (
        <>
            <section className="main services">
                <div className="container groupservices">
                    <div className="row servicesbox">
                        <div className="col-12 col-md-5 col-lg-4 hidden_m">
                            <div class="servicesimg">
                                <img src={require('../assets/images/ourservice/1.jpg')} alt="manicure pedicure" />
                                <img className="servicesimg2" src={require('../assets/images/ourservice/01.jpg')} alt="manicure pedicure" />
                            </div>
                        </div>

                        <div className="col-12 hidden_desktop">
                            <div className="servicesimg-mobile" style={{ backgroundImage: `url('http://nailapi.connectsales.vn/uploaded/product/5260307e-04c8-4945-a5c1-377f5d73024f.jpeg')` }}>
                            </div>
                        </div>

                        <div className="col-12 col-md-7 col-lg-8 servicescontent">
                            <div className="servicestitle">Nails</div>
                            <ul className="lstservice">
                                <li className="item">
                                    Basic Manicure
                                    <div className="price">$12</div>
                                </li>
                                <li class="item">
                                    Spa Manicure
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Polish Change
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Gel Manicure
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Gel Polish
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Full Set Acrylic
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Full Set Gel Polish
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Fill-in Acrylic
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Fill-in Gel Color
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    SNS Full Set
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    SNS Pink & White
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Pink & White
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Soak Off
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Nail Repair
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Nail Designs
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Add French
                                    <div class="price">$12</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;