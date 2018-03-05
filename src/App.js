import React, { Component } from 'react';
import Header from './components/header.jsx';
import HeaderGraphics from './components/Header_Graphics.jsx';
import CollapsibleMenu from './components/collapseNav.jsx';
import PitchHeader from './components/Pitch.jsx';
import Features from './components/Features.jsx';
import Footer from './components/footer.jsx';
import Chart from './components/chart.jsx';
import SideMenu from './components/sidenav.jsx';
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

/* L-Size Components */
import L_HeaderCharts from './components/HeaderCharts-L.jsx';
import L_Chart from './components/Chart-L.jsx';
import L_SideMenu from './components/Sidenav-L.jsx';
import L_ProfitChart from './components/ProfitChart-L.jsx';
import L_PieChart from './components/NetRevenueChart-L.jsx';

/* M-Size Components */
import M_HeaderCharts from './components/HeaderCharts-M.jsx';
import M_Chart from './components/Chart-M.jsx';
import M_SideMenu from './components/Sidenav-M.jsx';
import M_ProfitChart from './components/ProfitChart-M.jsx';
import M_PieChart from './components/NetRevenueChart-M.jsx';

/* M-Size Components */
import S_HeaderCharts from './components/HeaderCharts-S.jsx';
import S_Chart from './components/Chart-S.jsx';
import S_SideMenu from './components/Sidenav-S.jsx';
import S_ProfitChart from './components/ProfitChart-S.jsx';
import S_PieChart from './components/NetRevenueChart-S.jsx';

/* XS-Size Components */

import XS_CollapsibleMenu from './components/collapseNav-XS.jsx';
import XS_Chart from './components/Chart-XS.jsx';
import XS_ProfitChart from './components/ProfitChart-XS.jsx';
import XS_PieChart from './components/NetRevenueChart-XS.jsx';

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
      profit: true,
      revenue: true,
      screenSize: ''
    };
    this.onDashboardTypeChange = this.onDashboardTypeChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.showChart = this.showChart.bind(this);
  }

  renderChartScreen(size){

    if(size === 'l'){
      const {profit, revenue} = this.state;
      return [
        <div>
          <Row>
            <Col s={12}>
              <L_HeaderCharts onDashboardTypeChange={this.onDashboardTypeChange}/>
            </Col>
          </Row>
          <Row>
            <Col l={4}>
              <L_SideMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange} showChart={this.showChart}/>
            </Col>
            <Col l={8}>
              <L_Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
            </Col>
            {profit && 
              <Col l={8} offset="l4">
                <L_ProfitChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
            { revenue && 
              <Col l={8} offset="l4">
                <L_PieChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
          </Row> 
        </div>    
      ];
    }
    else if(size === 'm'){
      const {profit, revenue} = this.state;
      return [
        <div>
          <Row>
            <Col s={12}>
              <M_HeaderCharts onDashboardTypeChange={this.onDashboardTypeChange}/>
            </Col>
          </Row>
          <Row>
            <Col l={4}>
              <M_SideMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange} showChart={this.showChart}/>
            </Col>
            <Col l={8}>
              <M_Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
            </Col>
            {profit && 
              <Col l={8} offset="l4">
                <M_ProfitChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
            { revenue && 
              <Col l={8} offset="l4">
                <M_PieChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
          </Row> 
        </div>
      ];
    }
    else if(size === 's'){
      const {profit, revenue} = this.state;
      return [
       
        <div>
          <Row>
            <Col s={12}>
              <S_HeaderCharts onDashboardTypeChange={this.onDashboardTypeChange}/>
            </Col>
          </Row>
          <Row>
            <Col s={3}>
              <S_SideMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange} showChart={this.showChart}/>
            </Col>
            <Col s={9}>
              <S_Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
            </Col>
            {profit && 
              <Col s={9}>
                <S_ProfitChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
            { revenue && 
              <Col s={9} offset="s3">
                <S_PieChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
          </Row> 
        </div>
      ]
    }
    else if(size === 'xs'){
      const {profit, revenue} = this.state;
      return [
        <div>
          <Row>
            <Col s={12}>
              <HeaderGraphics onDashboardTypeChange={this.onDashboardTypeChange}/>
            </Col>
          </Row>
          <Row className="no_float_XS">
            <Col l={4}>
              <XS_CollapsibleMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange} showChart={this.showChart}/>
            </Col>
            <Col s={12}>
              <XS_Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
            </Col>
            {profit && 
              <Col s={12} >
                <XS_ProfitChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
            { revenue && 
              <Col s={12} >
                <XS_PieChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
          </Row> 
        </div>
      ];
    }
    else {
      const {profit, revenue} = this.state;
      return [
        <div>
          <Row>
            <Col s={12}>
              <HeaderGraphics onDashboardTypeChange={this.onDashboardTypeChange}/>
            </Col>
          </Row>
          <Row className="no_float_XS">
            <Col l={4}>
              <XS_CollapsibleMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange} showChart={this.showChart}/>
            </Col>
            <Col s={12}>
              <XS_Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
            </Col>
            {profit && 
              <Col s={12} >
                <XS_ProfitChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
            { revenue && 
              <Col s={12} >
                <XS_PieChart rangeOfValues={this.state.rangeOfValues} />
              </Col>
            }
          </Row> 
        </div>
      ];
    }
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
      <div className="mainContainer">
        <BrowserRouter>
          <div>

             {/*<Route
              exact
              path="/"
              render={props => ( 
                this.renderMainScreen(screenSize)
              )}
            />*/}
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
              render={props => (
                this.renderChartScreen(screenSize)
              )}
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
