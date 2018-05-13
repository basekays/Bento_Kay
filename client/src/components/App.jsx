import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StackGrid from "react-stack-grid";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <StackGrid
          columnWidth={"25%"}
          gutterWidth={10}
          gutterHeight={10}
          monitorImagesLoaded={true}
        >
          <div key="key1">
            <Card>
              <CardMedia>
                <img
                  src="http://24.media.tumblr.com/tumblr_m2ghjzApyE1r2zs3eo1_1280.jpg"
                />
              </CardMedia>
              <CardText>
                Cats with long, lean bodies are more likely to be outgoing, and more protective and vocal than those with a stocky build.
              </CardText>
            </Card>
          </div>
          <div key="key2">
            <Card>
              <CardMedia>
                <img
                  src="http://25.media.tumblr.com/tumblr_m4ro6aKwoi1rri6hgo1_1280.jpg"
                />
              </CardMedia>
              <CardText>
                Florence Nightingale owned more than 60 cats in her lifetime.
              </CardText>
            </Card>
          </div>
          <div key="key3">
            <Card>
              <CardMedia>
                <img
                  src="http://29.media.tumblr.com/tumblr_m2yqjfHI0g1qhwmnpo1_1280.jpg"
                />
              </CardMedia>
              <CardText>
                Cats step with both left legs, then both right legs when they walk or run.
              </CardText>
            </Card>
          </div>
          <div key="key4">
            <Card>
              <CardMedia>
                <img
                  src="http://24.media.tumblr.com/tumblr_lsadfj2V1b1qejbiro1_1280.jpg"
                />
              </CardMedia>
              <CardText>
                After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.
              </CardText>
            </Card>
          </div>
          <div key="key5">
            <Card>
              <CardMedia>
                <img
                  src="http://25.media.tumblr.com/tumblr_m3ouv3kqWb1r73wdao1_500.gif"
                />
              </CardMedia>
              <CardText>
                Cats have supersonic hearing
              </CardText>
            </Card>
          </div>
          <div key="key6">
            <Card>
              <CardMedia>
                <img
                  src="http://25.media.tumblr.com/tumblr_m0a9d4Oely1qbkee8o1_500.gif"
                />
              </CardMedia>
              <CardText>
                A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime.
              </CardText>
            </Card>
          </div>

        </StackGrid>
      </MuiThemeProvider>
    )
  }
};

export default App;
