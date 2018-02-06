import React, { Component } from 'react';
import Header from './components/header.jsx'
import SideMenu from './components/sidenav.jsx'
import Footer from './components/footer.jsx'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import Chart from './components/chart.jsx'
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
  render() {
    return (
      <div className="ui-g">
        <div className="ui-g-12">
          <Header />
        </div> 
        <div className="ui-g-3">
          <SideMenu />
        </div>
        <div className="ui-g-9">
          <Chart />
        </div> 
        <div className="ui-g-12">
          <Footer />
        </div>      
      </div>
    );
  }
}

export default App;
