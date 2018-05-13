import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CatGrid from '../containers/CatGrid';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CatGrid />
      </MuiThemeProvider>
    )
  }
};

export default App;
