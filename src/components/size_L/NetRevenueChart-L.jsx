import React, {Component} from 'react';
import '../../assets/css/dashboards.css';
import { Row, Col } from 'react-materialize';
import {
  RadialChart,
  Hint,
  DiscreteColorLegend,
  FlexibleWidthXYPlot
} from 'react-vis';
import { Colors } from '../../assets/theme';

const { i_blue, i_green, i_orange, i_aqua, i_purple, i_gray} = Colors;
const colors = [ i_blue, i_green, i_orange, i_aqua, i_purple, i_gray ];

export default class SimpleRadialChart extends Component {
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

  async getDataSet() {
    const headers = new Headers();
    const options = { method: 'GET',
                      headers: headers,
                      mode: 'cors',
                      cache: 'default' };
    const request = new Request('https://dashboards-app-back-end.azurewebsites.net/data', options);
    const response = await fetch(request);
    const data = await response.json();

    return data.data;
  }

  async buildDataset(newData) {
    const dataSet = await this.getDataSet();
    const DATA_MONTHS = dataSet.dataMonths;
    const NETREVENUE = dataSet.dataRevenue;
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

        const servers = total.servers + value.servers;
        const storage = total.storage + value.storage;
        const networking = total.networking + value.networking;
        const services = total.services + value.services;
        const finalConsumer = total.finalConsumer + value.finalConsumer;
        const software = this.financial(total.software + value.software);
        
        return {
            servers,
            storage,
            networking,
            services,
            finalConsumer,
            software,
        };
    }, {
        servers: 0,
        storage: 0,
        networking: 0,
        services: 0,
        finalConsumer: 0,
        software: 0,
        fixed: {},
    });

    netRevenue.totalRevenue = range2.reduce(
        (total, value) => total + Number(value.income), 
        0
    );

    for (var key in netRevenue.data) {
        netRevenue.data[key] = netRevenue.data[key] / range.length;
    }
    
    console.log(netRevenue);

    this.setState({ netRevenue: netRevenue });
  }

  assignProps(props) {
    this.setState({ inheritProps: props });
  }

  financial(x) {
    return Number.parseFloat(x).toFixed(2);
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
            <div className="legends">
                <DiscreteColorLegend startTitle="Values" width={180} items={[servers, storage, networking, services, finalConsumer, software]} />
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
                height={350}
                width={350}>
                {
                    value && <Hint value={value}>
                    <div className="pieChartHint">
                        <p>Revenue Percentage: <span>{value.theta} %</span></p>
                        <p>Gross Revenue: <span className="dlls">$ {(percentualUnitDlls * value.theta)}k USD</span></p>
                    </div>
                    </Hint>
                }
            </RadialChart>
            <div className="legends_money">
                <h2>Gross Revenue and Percentage</h2>
                <p>Servers - <span className="dlls">{this.financial(this.state.netRevenue.data.servers*percentualUnitDlls)}k USD </span> / <span>{this.financial(this.state.netRevenue.data.servers)} %</span></p>
                <p>Storage - <span className="dlls">{this.financial(this.state.netRevenue.data.storage*percentualUnitDlls)}k USD </span> / <span>{this.financial(this.state.netRevenue.data.storage)} %</span></p>
                <p>Networking - <span className="dlls">{this.financial(this.state.netRevenue.data.networking*percentualUnitDlls)}k USD </span> / <span>{this.financial(this.state.netRevenue.data.networking)} %</span></p>
                <p>Services - <span className="dlls">{this.financial(this.state.netRevenue.data.services*percentualUnitDlls)}k USD </span> / <span>{this.financial(this.state.netRevenue.data.services)} %</span></p>
                <p>Final Consumer - <span className="dlls">{this.financial(this.state.netRevenue.data.finalConsumer*percentualUnitDlls)}k USD </span> / <span>{this.financial(this.state.netRevenue.data.finalConsumer)} %</span></p>
                <p>Software - <span className="dlls">{this.financial(this.state.netRevenue.data.software*percentualUnitDlls)}k USD </span> / <span>{this.financial(this.state.netRevenue.data.software)} %</span></p>          
            </div>
        </Row>  
    );
  }
}
