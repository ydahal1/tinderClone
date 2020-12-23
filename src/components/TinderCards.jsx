import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";
import database from "../firebase.js";

class TinderCards extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    database
      .collection("people")
      .onSnapshot(snapShot =>
        this.setState({ people: snapShot.docs.map(doc => doc.data()) })
      );
  }

  // useEffect =
  //   (() => {
  //     const dbCall = database
  //       .collection("people")
  //       .onSnapshot(snapShot =>
  //         this.setState({ people: snapShot.docs.map(doc => doc.data()) })
  //       );
  //     dbCall();
  //   },
  //   []);

  render() {
    const { people } = this.state;
    return (
      <div className="container">
        <div className="tinderCards__cardContainer ">
          <div>
            {people.map(person => (
              <TinderCard
                preventSwipe={["up", "down"]}
                className="swipe"
                key={person.id}
              >
                <div
                  style={{ backgroundImage: `url(${person.url})` }}
                  className="card"
                >
                  <h4>{person.Name}</h4>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TinderCards;
