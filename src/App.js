import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";


class App extends Component {

  state = {
    images,
    clickedImages: [],
    score: 0,
    highscore: 0
  };
     // Shuffle the image cards when clicked
     clickedImage = () => {
      const shuffle = this.state.images;
  
      shuffle.forEach(() => {
        this.setState({image: shuffle.sort(() => Math.random() - 0.5)
        })
      })
    };
  
    // Map over this.state.images and render a FriendCard component for each friend object
    render() {
      return (
        <div>
          <Navbar />
          <Jumbotron />
          <Wrapper>
  
            {this.state.images.map(image => (
              <ImageCard
                clickedImage={this.clickedImage}
                id={image.id}
                key={image.id}
                name={image.name}
                image={image.image}
              />
            ))}
          </Wrapper></div>
      );
    }
}

export default App;
