import React, { Component } from 'react';
import StackGrid from "react-stack-grid";

import CatGridCard from './CatGridCard';

const styles = {
  stackGrid: {
    width: '80%',
    margin: '150px auto 50px',
  },
}

export default class CatGrid extends Component {

  render() {
    return (
      <StackGrid
        columnWidth='33.33%'
        style={styles.stackGrid}
        gutterWidth={10}
        gutterHeight={10}
        monitorImagesLoaded={true}
      >
        {this.props.index.map(({ key, image, fact, favorite }) => (
          <CatGridCard
            key={key}
            catKey={key}
            focused={this.props.focusedCatKey == key}
            focusedCatKey={this.props.focusedCatKey}
            image={image}
            fact={fact}
            favorite={favorite}
            actions={this.props.actions}
          />
        ))}
      </StackGrid>
    )
  }
}
