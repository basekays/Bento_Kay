import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StackGrid from "react-stack-grid";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
