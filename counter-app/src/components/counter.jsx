import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  //Use className to access bootstrap classes
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getClasses()}>
          {this.format_count()}
        </span>
        <button>Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    ); //Renders this heading, it's not a string, it's a jsx expression <> == <React.Fragment>
  }

  getClasses() {
    let style_classes = "badge m-2 badge-";
    if (this.state.count === 0) {
      style_classes += "warning";
    } else {
      style_classes += "primary";
    }
    return style_classes;
  }

  format_count() {
    const { count } = this.state; //variable count references count of the state of the class

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
