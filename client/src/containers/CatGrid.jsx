import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { bootstrap } from '../actions/bootstrap';

class CatGrid extends Component {
  componentDidMount() {
    this.props.actions.bootstrap();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <StackGrid
        columnWidth={"25%"}
        gutterWidth={10}
        gutterHeight={10}
        monitorImagesLoaded={true}
      >
      </StackGrid>
    )
  }
}

function mapStateToProps(state) {
  const {
    catImages: {
      images,
    },
    catFacts: {
      facts,
    },
    bootstrap: {
      bootstraping,
      bootstrapped,
    },
  } = state;

  return {
    images,
    facts,
    bootstraping,
    bootstrapped,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      bootstrap,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatGrid);
