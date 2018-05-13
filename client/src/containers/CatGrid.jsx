import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { zipWith } from 'lodash';

import { bootstrap } from '../actions/bootstrap';
import CatGridCard from '../components/CatGridCard';

class CatGrid extends Component {
  componentDidMount() {
    this.props.actions.bootstrap();
  }

  render() {
    return (
      <StackGrid
        columnWidth={"25%"}
        gutterWidth={10}
        gutterHeight={10}
        monitorImagesLoaded={true}
      >
        {this.props.cats.map(({ key, image, fact }) => (
          <CatGridCard
            key={key}
            image={image}
            fact={fact}
          />
        ))}
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

  const cats = !bootstrapped ? [] : zipWith(images, facts, (image, fact) => {
    return {
      key: `cat_${image.id[0]}`,
      image: image.url[0],
      fact: fact.fact,
    }
  });

  return {
    cats,
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
