import React, { Component } from 'react';
import Header from './components/header.jsx';
import HeaderGraphics from './components/Header_Graphics.jsx';
import SideMenu from './components/sidenav.jsx';
import PitchHeader from './components/Pitch.jsx';
import Features from './components/Features.jsx';
import Footer from './components/footer.jsx';
import Chart from './components/chart.jsx';
import ProfitChart from './components/ProfitChart.jsx';
import { Row, Col } from 'react-materialize';
import Help_Page from './components/help_page';
import './assets/css/main.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import '../node_modules/react-vis/dist/style.css';


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
      }
    };
    this.onDashboardTypeChange = this.onDashboardTypeChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
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

  render() {
    return (
      <div>
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
                  <Col s={12} m={3}>
                    <SideMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange}/>
                  </Col>
                  <Col s={12} m={9}>
                    <Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
                  </Col>
                  <Col s={12} m={9} offset="m3">
                    <ProfitChart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
                  </Col>
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
