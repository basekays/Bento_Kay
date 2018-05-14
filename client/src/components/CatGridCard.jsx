import React, {
  Component
} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

const styles = {
  focused: {
    opacity: 1,
    transition: 'opacity 200ms ease-in',
  },
  blurred: {
    opacity: 0.25,
    transition: 'opacity 200ms ease-out',
  }
}

class CatGridCard extends Component {
  constructor(props) {
    super(props);

    this.onFavoriteButtonPress = this.onFavoriteButtonPress.bind(this);
    this.onCatGridCardMouseEnter = this.onCatGridCardMouseEnter.bind(this);
    this.onCatGridCardMouseLeave = this.onCatGridCardMouseLeave.bind(this);
  }

  onFavoriteButtonPress() {
    const { actions: { favoriteCat }, catKey } = this.props;
    favoriteCat(catKey);
  }

  onCatGridCardMouseEnter() {
    this.props.actions.focusOnCat(this.props.catKey);
  }

  onCatGridCardMouseLeave() {
    this.props.actions.focusOnCat(null);
  }

  render() {
    const { focusedCatKey, focused, favorite, image, fact } = this.props;

    let divStyle;
    if (!focusedCatKey) {
      divStyle = styles.focused;
    } else {
      if (focused) {
        divStyle = styles.focused;
      } else {
        divStyle = styles.blurred;
      }
    }

    return (
      <div
        style={divStyle}
        onMouseEnter={this.onCatGridCardMouseEnter}
        onMouseLeave={this.onCatGridCardMouseLeave}
      >
        <Card>
          <CardMedia>
            <img
              src={image}
            />
          </CardMedia>
          <CardText>
            {fact}
          </CardText>
          <RaisedButton
            onClick={this.onFavoriteButtonPress}
            primary={!favorite}
            secondary={favorite}
            label={favorite ? "Unfavor" : "Favor"}
            fullWidth
          />
        </Card>
      </div>
    )
  }
}

export default CatGridCard;
