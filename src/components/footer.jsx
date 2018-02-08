import React, { Component } from 'react'
import '../assets/css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <ul className="menu">
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/company/">Company</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/services/">Services</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/resources/">Resources</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/careers/">Careers at Intersys</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/team-portal/">Team Portal</a></li>
                    </ul>
                </div>
                <div className="copyright">
                    &#169; 2018 Intersys Consulting, Inc. All Rights Reserved
                </div>
            </div>
        );
    }
}

export default Footer;