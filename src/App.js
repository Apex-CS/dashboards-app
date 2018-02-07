import React, { Component } from 'react';
import Header from './components/header.jsx'
import SideMenu from './components/sidenav.jsx'
import Footer from './components/footer.jsx'
import Chart from './components/chart.jsx'
import {Row, Col} from 'react-materialize'

import 'font-awesome/css/font-awesome.css';
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
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
            <SideMenu />
          </Col>
          <Col s={12} m={9}>
            <Chart />
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
