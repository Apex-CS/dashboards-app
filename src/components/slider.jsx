import React, { Component } from 'react';
import {Carousel, Row, Col, Button, Icon, Tag} from 'react-materialize'
import '../assets/css/slider.css';
import { Link } from 'react-router-dom'

class Slider extends Component {
    ir() {
        console.log('mensaje');
    }
    render() {
    return(
        <div>
            <Carousel 
                images={[
                'https://cdn-images-1.medium.com/max/1600/1*3L_OB5rwF7af1EpvR5kQIQ.png',
                'https://www.snapsurveys.com/wp-content/uploads/2012/10/bar_2d8.png',
                'https://www.qimacros.com/excel-charts-qimacros/stacked-area-chart-excel.jpg',
                'https://www.telerik.com/clientsfiles/61170d23-bbe4-4221-a15c-f1e2b13358b3_screen.png?sfvrsn=2bf34fb1_0',
                'https://peltiertech.com/images/2016-01/ScatterDotPlot.png'
            ]} />
            <Link to='/chart' className='btn center'>View Details</Link>
        </div>
    );
    }
}

export default Slider;