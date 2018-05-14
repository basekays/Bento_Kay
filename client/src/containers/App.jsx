import React, {
  Component
} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
  Toolbar,
  ToolbarGroup,
} from 'material-ui/Toolbar';
import { sortBy } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';

import CatGrid from '../components/CatGrid';
import { fetchCats } from '../actions/fetchCats';
import { favoriteCat } from '../actions/favoriteCat';
import { toggleFavoritesOnly } from '../actions/toggleFavoritesOnly';
import { sortCats } from '../actions/sortCats';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderToggleFavoritesOnlyButton =
      this.renderToggleFavoritesOnlyButton.bind(this);
    this.renderSortButton = this.renderSortButton.bind(this);
    this.renderClearCacheButton = this.renderClearCacheButton.bind(this);
  }

  renderToggleFavoritesOnlyButton() {
    const {
      actions: {
        toggleFavoritesOnly,
      },
      favoritesOnly,
    } = this.props;
    return (
      <FlatButton
        label={favoritesOnly ? "Show All" : "Show Favorites Only"}
        onClick={toggleFavoritesOnly}
      />
    );
  }

  renderSortButton() {
    const {
      actions: {
        sortCats,
      },
      sorted,
    } = this.props;
    return (
      <FlatButton
        label={sorted ? "Unsort" : "Sort"}
        onClick={sortCats}
      />
    );
  }

  renderClearCacheButton() {
    const {
      actions: {
        clearCache,
      },
      cached,
    } = this.props;

    if (cached) {
      return (
        <FlatButton
          label="Clear Cache"
          onClick={clearCache}
        />
      );
    }

    return null;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div id="root">
          <AppBar
            title="Favorite Cats"
            showMenuIconButton={false}
          />
          <Toolbar>
            <ToolbarGroup firstChild />
            <ToolbarGroup>
              {this.renderToggleFavoritesOnlyButton()}
              {this.renderSortButton()}
            </ToolbarGroup>
          </Toolbar>
          <CatGrid
            actions={this.props.actions}
            index={this.props.index}
          />
        </div>
      </MuiThemeProvider>
    )
  }
};

function mapStateToProps(state) {
  const {
    cats: {
      fetching,
      fetched,
      index,
      favoritesOnly,
      sorted,
    },
  } = state;

  let currentIndex = index;
  if (favoritesOnly) {
    currentIndex = currentIndex.filter((cat) => !!cat.favorite);
  }

  if (sorted) {
    currentIndex = sortBy(currentIndex, 'lastWord');
  }

  return {
    index: currentIndex,
    favoritesOnly,
    fetching,
    fetched,
    sorted,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchCats,
      favoriteCat,
      toggleFavoritesOnly,
      sortCats,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
