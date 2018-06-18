/* Dependencies */
import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import '../node_modules/react-vis/dist/style.css';
import 'primereact/resources/primereact.min.css';

/* Common Components */
import Chart from './components/common/Dashboards.jsx';
import CollapsibleMenu from './components/common/DataNavigatorCollapsible.jsx';
import Features from './components/common/Features.jsx';
import Footer from './components/common/Footer.jsx';
import Header from './components/common/MainHeader.jsx';
import HeaderAdp from './components/common/MainHeaderAdp.jsx';
import HeaderGraphics from './components/common/DashboardsHeader.jsx';
import Help_Page from './components/common/HelpContent.jsx';
import Help_Title from './components/common/HelpTitle.jsx';
import PitchHeader from './components/common/MainPitch.jsx';
import ProfitChart from './components/common/ProfitChart.jsx';
import SideMenu from './components/common/DataNavigator.jsx';
import SimpleRadialChart from './components/common/NetRevenueChart.jsx';
import TechStack from './components/common/TechStack.jsx';

/* L-Size Components */
import L_Chart from './components/size_L/Dashboards-L.jsx';
import L_HeaderCharts from './components/size_L/DashboardsHeader-L.jsx';
import L_PieChart from './components/size_L/NetRevenueChart-L.jsx';
import L_ProfitChart from './components/size_L/ProfitChart-L.jsx';
import L_SideMenu from './components/size_L/DataNavigator-L.jsx';

/* M-Size Components */
import M_Chart from './components/size_M/Dashboards-M.jsx';
import M_Footer from './components/size_M/Footer-M.jsx';
import M_HeaderCharts from './components/size_M/DashboardsHeader-M.jsx';
import M_PieChart from './components/size_M/NetRevenueChart-M.jsx';
import M_ProfitChart from './components/size_M/ProfitChart-M.jsx';
import M_SideMenu from './components/size_M/DataNavigator-M.jsx';

/* M-Size Components */

import S_Chart from './components/size_S/Dashboards-S.jsx';
import S_Footer from './components/size_S/Footer-S.jsx';
import S_HeaderCharts from './components/size_S/DashboardsHeader-S.jsx';
import S_PieChart from './components/size_S/NetRevenueChart-S.jsx';
import S_ProfitChart from './components/size_S/ProfitChart-S.jsx';
import S_SideMenu from './components/size_S/DataNavigator-S.jsx';

/* XS-Size Components */
import XS_Chart from './components/size_XS/Dashboards-XS.jsx';
import XS_CollapsibleMenu from './components/size_XS/DataNavigatorColl-XS.jsx';
import XS_Footer from './components/size_XS/Footer-XS.jsx';
import XS_PieChart from './components/size_XS/NetRevenueChart-XS.jsx';
import XS_ProfitChart from './components/size_XS/ProfitChart-XS.jsx';

/* Common Styles */
import './assets/css/main.css';

/* Mobile View */
import './assets/css/mobileView.css';
import cellphoneBottomCover from './assets/images/mobile_version_cover_bottom.png'

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

  renderFooter(size) {
    if(size === 'xxs' || size === 'xs') {
      return [
        <Col s={12}>
          <XS_Footer />
        </Col>
      ]
    } else if(size === 's') {
      return [
        <Col s={12}>
          <S_Footer />
        </Col>
      ]
    } else if (size === 'm') {
      return [
        <Col s={12}>
          <M_Footer />
        </Col>
      ]
    } else {
      return [
        <Col s={12}>
          <Footer />
        </Col>
      ]
    }
  }

  updateDimensions() {
    const {screenSize} = this.state;
    let size = this.screenSize;
    switch (true) {
      case window.innerWidth <= 575:
        size = 'xxs';
        break;
      case window.innerWidth <= 768:
        size = 'xs';
        break;
      case window.innerWidth <= 992:
        size = 's';
        break;
      case window.innerWidth <= 1200:
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
        <BrowserRouter basename="/dashboards-app">
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <Row>
                    <Col s={12}>
                      <Header screenSize={this.state.screenSize}/>
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
                  <Row>
                    <Col s={12}>
                      <TechStack />
                    </Col>
                  </Row>
                  <Row>
                    {this.renderFooter(screenSize)}
                  </Row>
                </div>
              )}
            />
            <Route
              exact
              path="/adaptive_mode"
              render={props => (
                <div className="mainContainer">
                  <Row>
                    <Col s={12}>
                      <HeaderAdp />
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
                  <Row>
                    {this.renderFooter(screenSize)}
                  </Row>
                </div>
              )}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL/ + 'dashboards'}
              render={props => (
                <div>
                  <Row>
                    <Col s={12}>
                      <HeaderGraphics onDashboardTypeChange={this.onDashboardTypeChange}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12} m={3}>
                      <SideMenu onDashboardTypeChange={this.onDashboardTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange} showChart={this.showChart}/>
                    </Col>
                    <Col s={12} m={9}>
                      <Chart chartType={this.state.typeOfChart} rangeOfValues={this.state.rangeOfValues} />
                    </Col>
                  
                  {profit && <Col s={12} m={9} offset="m3">
                      <ProfitChart rangeOfValues={this.state.rangeOfValues} />
                    </Col>
                  }
                  { revenue && 
                    <Col s={12} m={9} offset="m3">
                    <SimpleRadialChart rangeOfValues={this.state.rangeOfValues} />
                    </Col>
                  }
                  </Row>
                  <Row>
                    {this.renderFooter(screenSize)}
                  </Row>
                </div>
              )}
            />            
            <Route
              exact
              path="/adaptive_mode/dashboards"
              render={props => (
                <div className="mainContainer">
                  {this.renderChartScreen(screenSize)}
                  <Row>
                    {this.renderFooter(screenSize)}
                  </Row>
                </div>
                
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
                  <Row>
                    {this.renderFooter(screenSize)}
                  </Row>
                </div>
              )}
            />
            <Route
              exact
              path="/adaptive_mode/help"
              render={props => (
                <div className="mainContainer">
                  <Row>
                    <Col s={12}>
                      <HeaderAdp />
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
                  <Row>
                    {this.renderFooter(screenSize)}
                  </Row>
                </div>
              )}
            />
            <Route
              exact
              path="/mobile_mode"
              render={props => (
                <div className="outMobileContainer">
                  <Button node='a' href="/"><Icon left>arrow_back</Icon>Back To Full View</Button>
                  <div className="mobileContainer">
                    <iframe src="/" width="100%" height="100%" />
                    <img src={cellphoneBottomCover} className="mobileContainerCover" /> 
                  </div>
                </div>
              )}
            />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
