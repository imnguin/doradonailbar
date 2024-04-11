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

                    <div className="borderservices">
                        <img src={require('../assets/images/bg_services.png')} alt="" />
                    </div>

                    <div className="row servicesbox">
                        <div className="col-12 col-md-7 col-lg-8 servicescontent">
                            <div className="servicestitle">Pedicure</div>
                            <ul className="lstservice">
                                <li className="item">
                                    Basic Pedicure
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Honey Cappucino
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Wild Orchid Gardenia
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Rosemary Vanilla
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Pomegranate & Figs
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Tangerine or Green Tea Jelly
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Pina Colada
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Cooling Spearmint
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Organic Milk & Honey
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Organic Green Tea$4
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    OPI Lemon
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Honey Cucumber Mint
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Champagne & Rose
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Coconut Lime Butter
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Pumpkin Spice
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Chocolate Butter Creme
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Nu Skin Pedicure
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Add Hot Stone
                                    <div className="price">$12</div>
                                </li>

                            </ul>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 hidden_m">
                            <div className="servicesimg">
                                <img src={require('../assets/images/ourservice/3.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/03.jpg')} alt="manicure pedicure" className="servicesimg2" />
                            </div>
                            <div className="servicesimg">
                                <img src={require('../assets/images/ourservice/4.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/04.jpg')} alt="manicure pedicure" className="servicesimg2" />
                            </div>
                        </div>
                    </div>

                    <div className="borderservices">
                        <img src={require('../assets/images/bg_services.png')} alt="" />
                    </div>

                    <div className="row servicesbox">
                        <div className="col-12 col-md-5 col-lg-4 hidden_m">
                            <div className="servicesimg">
                                <img src={require('../assets/images/ourservice/5.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/05.jpg')} alt="manicure pedicure" className="servicesimg2" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8 servicescontent">
                            <div className="servicestitle">Herbal Spa</div>

                            <ul className="lstservice">
                                <li className="item">
                                    One Herb Treatment
                                    <div className="price">$12</div>
                                    <div className="note">This Manicure includes nails trim and shaping, buffing, cuticle grooming
                                        and conditioning, lotion massage and color of your choice or buff to perfect shine.
                                    </div>
                                </li>
                                <li className="item">
                                    Two Herb Treatment
                                    <div className="price">$12</div>
                                    <div className="note">This Manicure includes nails trim and shaping, buffing, cuticle grooming
                                        and conditioning, lotion massage and color of your choice or buff to perfect shine.
                                    </div>
                                </li>
                                <li className="item">
                                    Add Hotstone
                                    <div className="price">$12</div>
                                    <div className="note">This Manicure includes nails trim and shaping, buffing, cuticle grooming
                                        and conditioning, lotion massage and color of your choice or buff to perfect shine.
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="borderservices">
                        <img src={require('../assets/images/bg_services.png')} alt="" />
                    </div>

                    <div className="row servicesbox">
                        <div className="col-12 col-md-7 col-lg-8 servicescontent">
                            <div className="servicestitle">Children</div>
                            <ul className="lstservice">
                                <li className="item">
                                    Polish Change
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Kids Pedicure
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Manicure
                                    <div className="price">$12</div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 hidden_m">
                            <div className="servicesimg">
                                <img src={require('../assets/images/ourservice/6.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/06.jpg')} alt="manicure pedicure" className="servicesimg2" />
                            </div>
                        </div>
                    </div>

                    <div className="borderservices">
                        <img src={require('../assets/images/bg_services.png')} alt="" />
                    </div>

                    <div className="row servicesbox">
                        <div className="col-12 col-md-5 col-lg-4 hidden_m">
                            <div className="servicesimg">
                                <img src={require('../assets/images/ourservice/7.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/07.jpg')} alt="manicure pedicure" className="servicesimg2" />
                            </div>
                            <div className="servicesimg">
                                <img src={require('../assets/images/ourservice/8.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/08.jpg')} alt="manicure pedicure" className="servicesimg2" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8 servicescontent">
                            <div className="servicestitle">Waxing</div>
                            <ul className="lstservice">
                                <li className="item">
                                    Eyebrows
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Lip
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Chin
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Neck
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Cheek / Sideburn
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Underarm
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Half Arm
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Full Arm
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Half Leg
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Full Leg
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Bikini
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Brazilian
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Half Back
                                    <div className="price">$12</div>
                                </li>
                                <li className="item">
                                    Full Back
                                    <div className="price">$12</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="borderservices">
                        <img src={require('../assets/images/bg_services.png')} alt="" />
                    </div>

                    <div class="row servicesbox">
                        <div class="col-12 col-md-7 col-lg-8 servicescontent">
                            <div class="servicestitle">Eyebrow Tint</div>
                            <ul class="lstservice">
                                <li class="item">
                                    Eyebrow Wax & Tint
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Facial Mini
                                    <div class="price">$12</div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-5 col-lg-4 hidden_m">
                            <div class="servicesimg">
                                <img src={require('../assets/images/ourservice/9.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/9.jpg')} alt="manicure pedicure" class="servicesimg2" />
                            </div>
                        </div>
                    </div>

                    <div className="borderservices">
                        <img src={require('../assets/images/bg_services.png')} alt="" />
                    </div>

                    <div class="row servicesbox">
                        <div class="col-12 col-md-5 col-lg-4 hidden_m">
                            <div class="servicesimg">
                                <img src={require('../assets/images/ourservice/10.jpg')} alt="manicure pedicure" />
                                <img src={require('../assets/images/ourservice/010.jpg')} alt="manicure pedicure" class="servicesimg2" />
                            </div>
                        </div>
                        <div class="col-12 col-md-7 col-lg-8 servicescontent">
                            <div class="servicestitle">Eyelash</div>
                            <ul class="lstservice">
                                <li class="item">
                                    Individual (classic)
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Fill
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Volume
                                    <div class="price">$12</div>
                                </li>
                                <li class="item">
                                    Fill
                                    <div class="price">$12</div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="borderservices">
                        <img src={require('../assets/images/bg_services.png')} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;