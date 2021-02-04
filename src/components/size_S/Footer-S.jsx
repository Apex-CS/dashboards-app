import React, { Component } from 'react'
import '../../assets/css/footer.css';

import ImgIntersysFast from '../../assets/images/intersys-fast-50.png';
import ImgIntersysInc from '../../assets/images/intersys-inc-5000.png';

import { Row, Col } from 'react-materialize';

class S_Footer extends Component {
    PATH = 'https://www.apexsystems.com/';

    render() {
        return (
            <div>
                <Col className="footer">
                    <div className="s-left">
                        <ul>
                            <li><a target="_blank" href={this.PATH + "Pages/PrivacyPolicy.aspx"} >Privacy Policy & Terms of Use</a></li>
                            <li><a target="_blank" href="https://www.apexsystems.com/Consulting/Pages/ServiceLanding.aspx">Solutions</a></li>
                            <li><a target="_blank" href={this.PATH + "blogs/Pages/Apex-Blog.aspx"}>Blog</a></li>
                            <li><a target="_blank" href="https://itcareers.apexsystems.com/">Careers at Apex</a></li>
                            <li><a target="_blank" href={this.PATH + "/Pages/ApexNews.aspx"}>News</a></li>
                            <li><a target="_blank" href={this.PATH + "/Pages/Locations.aspx"}>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="s-right">
                        <img className="mr-30" src={ImgIntersysFast} alt="Intersys" />
                        <img className="mr-30" src={ImgIntersysInc} alt="Intersys" />
                    </div>
                </Col>
                <Col s={12} className="copyright">
                    &#169; 2021 Apex Systems All Rights Reserved
                </Col>
            </div>
        );
    }
}

export default S_Footer;