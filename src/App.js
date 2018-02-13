import React, { Component } from 'react';
import Header from './components/header.jsx'
import SideMenu from './components/sidenav.jsx'
import Footer from './components/footer.jsx'
import Chart from './components/chart.jsx'
import {Row, Col} from 'react-materialize'

import 'font-awesome/css/font-awesome.css';
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      typeOfChart: "line",
      rangeOfValues: {
        initMonth: "January",
        initYear: "2017",
        endMonth: "December",
        endYear: "2017"
      }
    };
    this.onChartTypeChange = this.onChartTypeChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onChartTypeChange(newChartType){
    this.setState({typeOfChart: newChartType});
  }
  
  onValueChange (newValue,typeOfValue) {
    switch(typeOfValue) {
      case 'initMonth':
        this.state.rangeOfValues.initMonth = newValue
        break;
      case 'initYear':
        this.state.rangeOfValues.initYear = newValue
        break;
      case 'endMonth':
        this.state.rangeOfValues.endMonth = newValue
        break;
      case 'endYear':
        this.state.rangeOfValues.endYear = newValue
        break;
    }
  }
  
  render() {
    return (
      <div>
        <Row>
          <Col s={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col s={12} m={3}>
            <SideMenu onChartTypeChange={this.onChartTypeChange} rangeofValues={this.state.rangeOfValues} onValueChange={this.onValueChange}/>
          </Col>
          <Col s={12} m={9}>
            <Chart chartType={this.state.typeOfChart} onValueChange={this.onValueChange}/>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Footer />
          </Col>
         </Row>
      </div>
    );
  }
}

export default App;
