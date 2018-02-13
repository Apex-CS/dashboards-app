import React, { Component } from 'react';
import Header from './components/header.jsx';
import SideMenu from './components/sidenav.jsx';
import Footer from './components/footer.jsx';
import Chart from './components/chart.jsx';
import { Row, Col } from 'react-materialize';
import Slider from './components/slider';
import { BrowserRouter, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfChart: 'line',
      initMonth: 'January',
      initYear: '2017',
      endMonth: 'December',
      endYear: '2017'
    };
    this.onChartTypeChange = this.onChartTypeChange.bind(this);
    this.onRangeSelection = this.onRangeSelection.bind(this);
  }

  onChartTypeChange(newChartType) {
    this.setState({ typeOfChart: newChartType });
  }

  onRangeSelection() {
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Row>
              <Col s={12}>
                <Header />
              </Col>
            </Row>
            <Row>
              <Route exact path="/" component={Slider} />
              <Route exact path="/chart" render={(props) => (<div><Col s={12} m={3}>
                <SideMenu onChartTypeChange={this.onChartTypeChange} onRangeSelection={this.onRangeSelection}/>
              </Col>
              <Col s={12} m={9}>
                <Chart chartType={this.state.typeOfChart} />
              </Col></div>)}/>
            </Row>
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
