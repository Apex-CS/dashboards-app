import React, { Component } from 'react'
import '../assets/css/footer.css';

import ImgIntersysFast from '../assets/images/intersys-fast-50.png';
import ImgIntersysInc from '../assets/images/intersys-inc-5000.png';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="left">
                        <ul>
                            <li><a target="_blank" href="https://www.intersysconsulting.com/company/">Company</a></li>
                            <li><a target="_blank" href="https://www.intersysconsulting.com/services/">Services</a></li>
                            <li><a target="_blank" href="https://www.intersysconsulting.com/resources/">Resources</a></li>
                            <li><a target="_blank" href="https://www.intersysconsulting.com/careers/">Careers at Intersys</a></li>
                            <li><a target="_blank" href="https://www.intersysconsulting.com/team-portal/">Team Portal</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <img className="mr-30" src={ImgIntersysFast} alt="Intersys" />
                        <img className="mr-30" src={ImgIntersysInc} alt="Intersys" />
                    </div>
                </div>
                <div className="copyright">
                    &#169; 2018 Intersys Consulting, Inc. All Rights Reserved
                </div>
            </div>
        );
    }
}

export default Footer;