import React, { useEffect, useState } from "react";
import { HOSTNAME } from "../utils/constants/SystemVars";
import { _fetchData } from '../utils/CallAPI';
import { useParams } from "react-router-dom";

const Home = (props) => {
    const { KeyAPI } = useParams();
    const [dataSource, setDataSource] = useState([]);
    const [isLoadFinish, setIsLoadFinish] = useState(false);

    useEffect(() => {
        loadData(KeyAPI);
    }, []);

    const loadData = () => {
        setIsLoadFinish(false);
        const _header = {
            'Content-Type': 'application/json',
            'apikey': KeyAPI
        }
        _fetchData(HOSTNAME, 'v2/booking/services', '', 'GET', _header).then(apiResult => {
            console.log('Data received:', apiResult.data);
            setDataSource(apiResult.data);
            setIsLoadFinish(true);
        })
    }

    return (
        !!isLoadFinish && <>
            <section className="main services">
                <div className="container groupservices">
                    {
                        dataSource.map((item, index) => {
                            return (
                                index % 2 === 0 ?
                                    <div key={index}>
                                        <div className="row servicesbox">
                                            <div className="col-12 col-md-5 col-lg-4 hidden_m">
                                                <div className="servicesimg">
                                                    <img src={item.serviceGroupIcon} alt="manicure pedicure" />
                                                    <img style={{ width: 130, height: 130 }} className="servicesimg2" src={item.serviceGroupIcon1} alt="manicure pedicure" />
                                                </div>
                                            </div>

                                            <div className="col-12 hidden_desktop">
                                                <div className="servicesimg-mobile" style={{ backgroundImage: `url('http://nailapi.connectsales.vn/uploaded/product/5260307e-04c8-4945-a5c1-377f5d73024f.jpeg')` }}>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-7 col-lg-8 servicescontent">
                                                <div className="servicestitle">{item.serviceGroupName}</div>
                                                <ul className="lstservice">
                                                    {
                                                        item.services.map((service, ind) => {
                                                            return (
                                                                <li className="item" key={ind}>
                                                                    {service.serviceName}
                                                                    <div className="price">${service.servicePrice}</div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="borderservices">
                                            <img src={require('../assets/images/bg_services.png')} alt="" />
                                        </div>
                                    </div>
                                    :
                                    <div key={index}>
                                        <div className="row servicesbox">
                                            <div className="col-12 col-md-7 col-lg-8 servicescontent">
                                                <div className="servicestitle">{item.serviceGroupName}</div>
                                                <ul className="lstservice">
                                                    {
                                                        item.services.map((service, ind) => {
                                                            return (
                                                                <li className="item" key={ind}>
                                                                    {service.serviceName}
                                                                    <div className="price">${service.servicePrice}</div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div className="col-12 col-md-5 col-lg-4 hidden_m">
                                                <div className="servicesimg">
                                                    <img src={item.serviceGroupIcon} alt="manicure pedicure" />
                                                    <img style={{ width: 130, height: 130 }} src={item.serviceGroupIcon1} alt="manicure pedicure" className="servicesimg2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}
export default Home;