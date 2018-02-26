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
                        You will find different types of graphs that will help you as a tool
                        to measure your data that suits your needs.<br />

                        <span className="bold">Thousands of people are using it !</span> 
                        &nbsp;you will not find it at a better price with the most complete content, different graphics, original and unique
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