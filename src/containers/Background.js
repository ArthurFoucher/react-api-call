import React, { Component } from "react";
import Image from "Image";

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = { pictures: [] };
    this.setPictures = this.setPictures.bind(this);
  }

  setPictures(data) {
    const pictures = data.map(person => {
      const fullName = `${person.name.first} ${person.name.last}`;
      const largeUrl = person.picture.large;
      const id = person.registered;
      return <Image src={largeUrl} key={id} altValue={fullName} />;
    });
    this.setState({ pictures });
  }

  componentWillMount() {
    window
      .fetch("https://randomuser.me/api/?results=120")
      .then(data => data.json())
      .then(json => this.setPictures(json.results));
  }

  render() {
    return <div>{this.state.pictures}</div>;
  }
}

export default Background;
