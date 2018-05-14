import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCats } from '../actions/fetchCats';
import { favoriteCat } from '../actions/favoriteCat';
import CatGridCard from '../components/CatGridCard';

const styles = {
  stackGrid: {
    width: '80%',
    margin: '50px auto',
  },
}

class CatGrid extends Component {
  componentDidMount() {
    this.props.actions.fetchCats();
  }

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

function mapStateToProps(state) {
  const {
    cats: {
      fetching,
      fetched,
      index,
    },
  } = state;

  return {
    index,
    fetching,
    fetched,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchCats,
      favoriteCat,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatGrid);
