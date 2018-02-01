import React, { Component } from 'react';
import Header from './components/header.jsx'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';


class App extends Component {
  render() {
    return (
      <div className="ui-g">
        <div className="ui-g-12">
          <Header></Header>
        </div>       
      </div>
    );
  }
}

export default App;
