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
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

import CatGrid from '../components/CatGrid';
import { fetchCats } from '../actions/fetchCats';
import { favoriteCat } from '../actions/favoriteCat';
import { toggleFavoritesOnly } from '../actions/toggleFavoritesOnly';
import { sortCats } from '../actions/sortCats';
import { clearCatCache } from '../actions/clearCatCache';
import { focusOnCat } from '../actions/focusOnCat';

const styles = {
  circularProgress: {
    marginLeft: '20px',
  },
}

class App extends Component {
  constructor(props) {
    super(props);

    this.onShowOutOfFavoritesSnackBarClose =
      this.onShowOutOfFavoritesSnackBarClose.bind(this);
    this.renderToggleFavoritesOnlyButton =
      this.renderToggleFavoritesOnlyButton.bind(this);
    this.renderSortButton = this.renderSortButton.bind(this);
    this.renderClearCatCacheButton = this.renderClearCatCacheButton.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchCats();
  }

  onShowOutOfFavoritesSnackBarClose() {
    window.requestAnimationFrame(this.props.actions.toggleFavoritesOnly);
  }

  renderToggleFavoritesOnlyButton() {
    const {
      actions: {
        toggleFavoritesOnly,
      },
      favoritesOnly,
      hasFavorites,
    } = this.props;

    if (hasFavorites) {
      return (
        <FlatButton
          label={favoritesOnly ? "Show All" : "Show Favorites Only"}
          onClick={toggleFavoritesOnly}
        />
      );
    }

    return null;
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

  renderClearCatCacheButton() {
    const {
      actions: {
        clearCatCache,
      },
      cached,
    } = this.props;

    if (cached) {
      return (
        <FlatButton
          label="Clear Cache"
          onClick={clearCatCache}
        />
      );
    }

    return null;
  }

  render() {
    const { favoritesOnly, hasFavorites } = this.props;

    return (
      <MuiThemeProvider>
        <div id="root">
          <AppBar
            title="Cat Facts"
            showMenuIconButton={false}
          />
          <Toolbar>
            <ToolbarGroup firstChild>
              {this.props.fetching && (
                <CircularProgress size={20} style={styles.circularProgress} />
              )}
            </ToolbarGroup>
            <ToolbarGroup>
              {this.renderToggleFavoritesOnlyButton()}
              {this.renderSortButton()}
              {this.renderClearCatCacheButton()}
            </ToolbarGroup>
          </Toolbar>
          <CatGrid
            actions={this.props.actions}
            index={this.props.index}
            focusedCatKey={this.props.focusedCatKey}
          />
          <Snackbar
            open={favoritesOnly && !hasFavorites}
            message="You Have No More Favorites"
            autoHideDuration={1000}
            onRequestClose={this.onShowOutOfFavoritesSnackBarClose}
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
      cached,
      focusedCatKey,
    },
  } = state;

  let currentIndex = index;

  const currentFavorites = currentIndex.filter((cat) => !!cat.favorite);

  if (favoritesOnly) {
    currentIndex = currentFavorites;
  }

  if (sorted) {
    currentIndex = sortBy(currentIndex, 'lastWord');
  }

  return {
    index: currentIndex,
    favoritesOnly,
    hasFavorites: currentFavorites.length >= 1,
    fetching,
    fetched,
    sorted,
    cached,
    focusedCatKey,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchCats,
      favoriteCat,
      toggleFavoritesOnly,
      sortCats,
      clearCatCache,
      focusOnCat,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
