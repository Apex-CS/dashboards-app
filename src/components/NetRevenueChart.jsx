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
import { NETREVENUE } from './charts/values2';

export default class SimpleRadialChart extends Component {
  state = {
    inheritProps: {},
    netRevenue: {
      title: 'Net Revenue',
      disabled: false,
      data: []
    },
    value: false
  };

  constructor(props) {
    super(props);
    this.buildDataset(this.props.rangeOfValues);
  }

  componentWillReceiveProps(newProps) {
    this.buildDataset(newProps.rangeOfValues);
  }

  buildDataset(newData) {
    const { netRevenue } = this.state;
    const initial = NETREVENUE.findIndex(
      element =>
        element.year === newData.initYear && element.month === newData.initMonth
    );
    const end = NETREVENUE.findIndex(
      element =>
        element.year === newData.endYear && element.month === newData.endMonth
    );
    const range = NETREVENUE.slice(initial, end + 1);
    
    netRevenue.data = range.reduce((total,value) => {
        
        return {
            servers: total.servers + value.servers,
            storage: total.storage + value.storage,
            networking: total.networking + value.networking,
            services: total.services + value.services,
            finalConsumer: total.finalConsumer + value.finalConsumer,
            software: total.software + value.software,
        };

    });

    for (var key in netRevenue.data) {
        netRevenue.data[key] = netRevenue.data[key] / range.length;
    }
    
    this.setState({ netRevenue: netRevenue });
    //console.log(this.state);
  }
  
  assignProps(props) {
    this.setState({ inheritProps: props });
  }


  render() {
    const {netRevenue, value} = this.state;
    console.log(netRevenue.data);
    const dataValues = Object.keys(netRevenue.data).map( key => ({theta: netRevenue.data[key]}) );
    return (
        <Row className="pieChartBox">
            <Col s={12}>
            <h1>Net Revenue</h1>
            </Col>
            <RadialChart
                className={'pieChart'}
                innerRadius={0}
                getAngle={
                    d => d.theta}
                data={dataValues}
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