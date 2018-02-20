import React, { Component } from 'react';
import Header from './components/header.jsx';
import HeaderGraphics from './components/Header_Graphics.jsx';
import SideMenu from './components/sidenav.jsx';
import MainParallax from './components/parallax.jsx';
import Footer from './components/footer.jsx';
import Chart from './components/chart.jsx';
import { Row, Col } from 'react-materialize';
import Slider from './components/slider';
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
    this.onChartTypeChange = this.onChartTypeChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onChartTypeChange(newChartType) {
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
                    <MainParallax />
                  </Col>
                </Row>
              </div>
            )}/>
            <Route exact path="/dashboards" render={(props) => (
              <div>
                <Row>
                  <Col s={12}>
                    <HeaderGraphics onChartTypeChange={this.onChartTypeChange}/>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} m={3}>
                    <SideMenu onChartTypeChange={this.onChartTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange}/>
                  </Col>
                  <Col s={12} m={9}>
                    <Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
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
                    <Slider onChartTypeChange={this.onChartTypeChange}/>
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
