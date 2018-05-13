import React, {
  Component
} from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

export default class CatGridCard extends Component {
  render() {
    const { image, fact } = this.props;

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
        </Card>
      </div>
    )
  }
}
