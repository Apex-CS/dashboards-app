import React       from 'react';
import {Component} from 'react';
import {Row, Col, Icon}  from 'react-materialize'
import '../assets/css/help_title.css';

// Images
import search from '../assets/images/search.png';
import searchIcon from '../assets/images/search-icon.svg';

export default class Help_Title extends Component {
    render() {
        return(
            <Row className="containerHelp">
                <Col m={6} l={8}>
                    <h3>Need <span>Help?</span></h3>
                    <p>
                    Here you can find the information of all the functions of the app, to have the best performance possible of your new assistant! <br />
                    Save money and time with your new personal information analyst
                    </p>
                </Col>
                <Col m={6}  l={4}>
                    <div className="right">
                        <img src={search} />
                    </div>
                </Col>
                
            </Row>
        );
    }
}
