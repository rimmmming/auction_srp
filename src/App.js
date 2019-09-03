import React, {Component} from 'react';
import Header from './layout/header';
import Navigation from './layout/navigation';
import Listpage from './page/lp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Listpage />
      </div>
    )
  }
}

export default App;