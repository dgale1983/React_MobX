import React, { Component } from 'react';
import { appStore } from './store';

import { configure } from 'mobx';

import Controls from './containers/controls.container';
import Table from './containers/table.container';
import Counter from './containers/counter.container';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controls store={ appStore } />
        <Table store={ appStore } />
        <Counter store={ appStore } />
      </div>
    );
  }
}


// * MobX
// * This enforces 'actions' to be the only way to modify state
configure({
  enforceActions: "always"
})

export default App;
