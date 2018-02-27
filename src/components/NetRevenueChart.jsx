import React, {Component} from 'react';
import '../assets/css/chart.css';
import { Row, Col } from 'react-materialize';
import {
  RadialChart,
  Hint,
  DiscreteColorLegend,
  FlexibleWidthXYPlot
} from 'react-vis';
import { Colors } from '../assets/theme';
import { SERVERS } from './charts/values2';

export default class SimpleRadialChart extends Component {
  state = {
    inheritProps: {},
    values: false
  }


  render() {
    const {value} = this.state;
    return (
        <Row className="pieChartBox">
            <Col s={12}>
            <h1>Net Revenue</h1>
            </Col>
            <RadialChart
                className={'pieChart'}
                innerRadius={0}
                getAngle={d => d.theta}
                data={[
                {theta: 2, className: 'custom-class'},
                {theta: 6},
                {theta: 2},
                {theta: 3},
                {theta: 1}
                ]}
                onValueMouseOver={v => this.setState({value: v})}
                onSeriesMouseOut={v => this.setState({value: false})}
                height={350}
                width={350}>
                {value && <Hint value={value}/>}
            </RadialChart>
        </Row>  
    );
  }
}