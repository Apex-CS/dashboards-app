import React, { Component } from 'react'
import '../assets/css/footer.css';
//import { Footer } from 'react-materialize'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <ul className="menu">
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/company/">Company</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/services/">Services</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" target="_blank" href="https://www.intersysconsulting.com/resources/">Resources</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/careers/">Carrers at Intersys</a></li>
                        <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.intersysconsulting.com/team-portal/">Team Portal</a></li>
                    </ul>
                    <div className="copyright">
                        &#169; Copyright Intersys Consulting
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;