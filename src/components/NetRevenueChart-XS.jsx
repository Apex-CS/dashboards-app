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
import { DATA_MONTHS } from './charts/values';
import { NETREVENUE } from './charts/values2';

const { i_blue, i_green, i_orange, i_aqua, i_purple, i_gray} = Colors;
const colors = [ i_blue, i_green, i_orange, i_aqua, i_purple, i_gray ];
export default class XS_PieChart extends Component {
  state = {
    inheritProps: {},
    netRevenue: {
      title: 'Net Revenue',
      disabled: false,
      data: []
    },
    servers: {
        title: 'Servers',
        color: i_green
      },
    storage: {
        title: 'Storage',
        color: i_gray
    },
    networking: {
        title: 'Networking',
        color: i_purple
    },
    services: {
        title: 'Services',
        color: i_aqua
    },
    finalConsumer: {
        title: 'Final Consumer',
        color: i_orange
    },
    software: {
        title: 'Software',
        color: i_blue
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
    const range2 = DATA_MONTHS.slice(initial, end + 1);
    
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

    netRevenue.totalRevenue = range2.reduce(
        (total, value) => total + Number(value.income), 
        0
    );

    for (var key in netRevenue.data) {
        netRevenue.data[key] = netRevenue.data[key] / range.length;
    }
    
    this.setState({ netRevenue: netRevenue });
  }
  
  assignProps(props) {
    this.setState({ inheritProps: props });
  }

  render() { 
    const {
        netRevenue, 
        value, 
        servers, 
        storage, 
        networking, 
        services,
        finalConsumer,
        software,
        totalRevenue
    } = this.state;
    const percentualUnitDlls = netRevenue.totalRevenue/100;
    const dataValues = Object.keys(netRevenue.data).map( key => ({theta: netRevenue.data[key]}) );
    return (
        <Row className="pieChartBox">
            <Col s={12}>
            <h1>Net Revenue</h1>
            </Col>
            <div className="legends legends_XS">
                <DiscreteColorLegend startTitle="Values" width={180} items={[servers, storage, networking, services, finalConsumer, software]} />
            </div>
            <div className="legends_money legends_money_XS">
                <h2>Gross Revenue and Percentage</h2>
                <p>Servers - <span className="dlls">{(this.state.netRevenue.data.servers*percentualUnitDlls).toFixed(2)}k USD </span> / <span>{this.state.netRevenue.data.servers.toFixed(2)} %</span></p>
                <p>Storage - <span className="dlls">{(this.state.netRevenue.data.storage*percentualUnitDlls).toFixed(2)}k USD </span> / <span>{this.state.netRevenue.data.storage.toFixed(2)} %</span></p>
                <p>Networking - <span className="dlls">{(this.state.netRevenue.data.networking*percentualUnitDlls).toFixed(2)}k USD </span> / <span>{this.state.netRevenue.data.networking.toFixed(2)} %</span></p>
                <p>Services - <span className="dlls">{(this.state.netRevenue.data.services*percentualUnitDlls).toFixed(2)}k USD </span> / <span>{this.state.netRevenue.data.services.toFixed(2)} %</span></p>
                <p>Final Consumer - <span className="dlls">{(this.state.netRevenue.data.finalConsumer*percentualUnitDlls).toFixed(2)}k USD </span> / <span>{this.state.netRevenue.data.finalConsumer.toFixed(2)} %</span></p>
                <p>Software - <span className="dlls">{(this.state.netRevenue.data.software*percentualUnitDlls).toFixed(2)}k USD </span> / <span>{this.state.netRevenue.data.software.toFixed(2)} %</span></p>          
            </div>
            <RadialChart
                className={'pieChart'}
                innerRadius={0}
                getAngle={
                    d => d.theta}
                colorRange={colors}
                data={dataValues}
                onValueMouseOver={v => this.setState({value: v})}
                onSeriesMouseOut={v => this.setState({value: false})}
                height={450}
                width={450}>
                {
                    value && <Hint value={value}>
                    <div className="pieChartHint">
                        <p>Revenue Percentage: <span>{value.theta.toFixed(2)} %</span></p>
                        <p>Gross Revenue: <span className="dlls">$ {(percentualUnitDlls * value.theta).toFixed(2)}k USD</span></p>
                    </div>
                    </Hint>
                }
            </RadialChart>
            
        </Row>  
    );
  }
}