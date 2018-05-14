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


class CatGridCard extends Component {

  constructor(props) {
    super(props);

    this.onFavoriteButtonPress = this.onFavoriteButtonPress.bind(this);
  }

  onFavoriteButtonPress() {
    const { actions: { favoriteCat }, catKey } = this.props;
    favoriteCat(catKey);
  }

  render() {
    const { favorite, image, fact } = this.props;
    return (
      <div>
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
