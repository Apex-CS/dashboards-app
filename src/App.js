import React, { Component } from 'react';
import Header from './components/header.jsx';
import HeaderGraphics from './components/Header_Graphics.jsx';
import SideMenu from './components/sidenav.jsx';
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
      typeOfChart: 'line',
      rangeOfValues: {
        initMonth: 'February',
        initYear: 2017,
        endMonth: 'January',
        endYear: 2018
      },
      profit: false,
      revenue: false,
      screenSize: ''
    };
    this.onDashboardTypeChange = this.onDashboardTypeChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.showChart = this.showChart.bind(this);
  }

  updateDimensions() {
    const {screenSize} = this.state;
    let size = this.screenSize;
    switch (true) {
      case window.innerWidth <= 575:
        size = 'xxs';
        break;
      case window.innerWidth < 768:
        size = 'xs';
        break;
      case window.innerWidth < 992:
        size = 's';
        break;
      case window.innerWidth < 1200:
        size = 'm';
        break;
      case window.innerWidth >=1200:
        size = 'l';
        break;
    }
    if (size !== screenSize){
      this.setState({screenSize: size});
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillMount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  onDashboardTypeChange(newChartType) {
    this.setState({ typeOfChart: newChartType });
  }

  onValueChange(newValue, typeOfValue) {
    const { rangeOfValues } = this.state;
    const range = rangeOfValues;
    switch (typeOfValue) {
      case 'initMonth':
        range.initMonth = newValue;
        break;
      case 'initYear':
        range.initYear = newValue;
        break;
      case 'endMonth':
        range.endMonth = newValue;
        break;
      case 'endYear':
        range.endYear = newValue;
        break;
    }
    this.setState({ rangeofValues: range });
  }

  showChart(chart, election) {
    this.setState({ [chart]: election });
  }
  render() {
    const { profit, revenue, screenSize } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route
              exact
              path="/"
              render={props => (
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
              )}
            />
            <Route
              exact
              path="/dashboards"
              render={props => <div>{screenSize}</div> }
            />
            <Route
              exact
              path="/help"
              render={props => (
                <div>
                  <Row>
                    <Col s={12}>
                      <Header />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12}>
                      <Help_Title />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12}>
                      <Help_Page
                        onDashboardTypeChange={this.onDashboardTypeChange}
                      />
                    </Col>
                  </Row>
                </div>
              )}
            />
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
