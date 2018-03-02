import React, { Component } from 'react';
import Header from './components/header.jsx';
import HeaderGraphics from './components/Header_Graphics.jsx';
import CollapsibleMenu from './components/collapseNav.jsx';
import PitchHeader from './components/Pitch.jsx';
import Features from './components/Features.jsx';
import Footer from './components/footer.jsx';
import Chart from './components/chart.jsx';
import ProfitChart from './components/ProfitChart.jsx';
import SimpleRadialChart from './components/NetRevenueChart.jsx';
import { Row, Col } from 'react-materialize';
import Help_Page from './components/help_page';
import './assets/css/main.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import '../node_modules/react-vis/dist/style.css';
import Help_Title from './components/help_title';
import 'primereact/resources/primereact.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfChart: "line",
      rangeOfValues: {
        initMonth: "February",
        initYear: 2017,
        endMonth: "January",
        endYear: 2018
      },
      profit: false,
      revenue: false
    };
    this.onDashboardTypeChange = this.onDashboardTypeChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.showChart = this.showChart.bind(this);
  }

  onDashboardTypeChange(newChartType) {
    this.setState({ typeOfChart: newChartType });
  }
  
  onValueChange (newValue, typeOfValue) {
    const {rangeOfValues} = this.state;
    const range = rangeOfValues;
    switch(typeOfValue) {
      case 'initMonth':
        range.initMonth = newValue
        break;
      case 'initYear':
        range.initYear = newValue
        break;
      case 'endMonth':
        range.endMonth = newValue
        break;
      case 'endYear':
        range.endYear = newValue
        break;
    }
    this.setState({rangeofValues: range});
  }

  showChart (chart, election) {
    this.setState({[chart]: election});
  }
  render() {
    const {profit, revenue} = this.state;
    return (
      <div className="mainContainer">
        <BrowserRouter>
          <div>
            <Route exact path="/" render={(props) => (
              <div>
                <Row>
                  <Col s={12}>
                    <Header />
                  </Col>
                </Row>
                <Row>
                  <Col s={12}>
                    <PitchHeader />
                  </Col>
                </Row>
                <Row>
                  <Col s={12}>
                    <Features />
                  </Col>
                </Row>
              </div>
            )}/>
            <Route exact path="/dashboards" render={(props) => (
              <div>
                <Row>
                  <Col s={12}>
                    <HeaderGraphics onDashboardTypeChange={this.onDashboardTypeChange}/>
                  </Col>
                </Row>
                <Row>
                  <Col s={12}>
                    <CollapsibleMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange} showChart={this.showChart}/>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} m={9}>
                    <Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
                  </Col>
                
                {profit && <Col s={12} m={9} >
                    <ProfitChart rangeOfValues={this.state.rangeOfValues} />
                  </Col>
                }
                { revenue && 
                  <Col s={12} m={9} offset="m3">
                  <SimpleRadialChart rangeOfValues={this.state.rangeOfValues} />
                  </Col>
               }
               </Row>
              </div>
            )}/>
            <Route exact path="/help" render={(props) => (
              <div>
                <Row>
                  <Col s={12}>
                    <Header />
                  </Col>
                </Row>
                <Row>
                  <Col s={12}><Help_Title /></Col>
                </Row>
                <Row>
                  <Col s={12}>
                    <Help_Page onDashboardTypeChange={this.onDashboardTypeChange}/>
                  </Col>
                </Row>
              </div>
            )}/>
            <Row>
              <Col s={12}>
                <Footer />
              </Col>
            </Row>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
