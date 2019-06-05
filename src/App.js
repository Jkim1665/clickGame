import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";


class App extends Component {

  state = {
    friends,
    clickedFriends: [],
    score: 0,
    highscore: 0
  };
     // Shuffle the friend cards when clicked
     clickedFriend = () => {
      const shuffle = this.state.friends;
  
      shuffle.forEach(() => {
        this.setState({friend: shuffle.sort(() => Math.random() - 0.5)
        })
      })
    };
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <div>
          <Navbar />
          <Jumbotron />
          <Wrapper>
  
            {this.state.friends.map(friend => (
              <FriendCard
                clickedFriend={this.clickedFriend}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
              />
            ))}
          </Wrapper></div>
      );
    }
}

export default App;
