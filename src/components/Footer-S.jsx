import React, { Component } from 'react'
import '../assets/css/footer.css';

import ImgIntersysFast from '../assets/images/intersys-fast-50.png';
import ImgIntersysInc from '../assets/images/intersys-inc-5000.png';

import { Row, Col } from 'react-materialize';

class S_Footer extends Component {
    PATH = 'https://www.intersysconsulting.com/';

    render() {
        return (
            <div>
                <Col className="footer">
                    <div className="s-left">
                        <ul>
                            <li className="s-display-li"><a target="_blank" href={this.PATH + "company/privacy-policy-terms-use/"} >Privacy Policy & Terms of Use</a></li>
                            <li className="s-display-li"><a target="_blank" href={this.PATH + "team-portal/"}>Team Portal</a></li>
                            <li className="s-display-li"><a target="_blank" href={this.PATH + "company/partners/"}>Partners</a></li>
                            <li className="s-display-li"><a target="_blank" href={this.PATH + "careers/"}>Careers at Intersys</a></li>
                            <li className="s-display-li"><a target="_blank" href={this.PATH + "resources/"}>Resources</a></li>
                            <li className="s-display-li"><a target="_blank" href={this.PATH + "services/"}>Services</a></li>
                            <li className="s-display-li"><a target="_blank" href={this.PATH + "company/"}>Company</a></li>
                        </ul>
                    </div>
                    <div className="s-right">
                        <img className="mr-30" src={ImgIntersysFast} alt="Intersys" />
                        <img className="mr-30" src={ImgIntersysInc} alt="Intersys" />
                    </div>
                </Col>
                <Col s={12} className="copyright">
                    &#169; 2018 Intersys Consulting, Inc. All Rights Reserved
                </Col>
            </div>
        );
    }
}

export default S_Footer;