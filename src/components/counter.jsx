import React, { Component } from "react";

class Counter extends Component {
  // state is basically an object that includes any data that this component needs
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  style = {
    fontSize: "50px",
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

//   constructor(){
//     super()
//     this.handleIncrement = this.handleIncrement.bind(this)
//   }

  handleIncrement = product => {
    // console.log("Increment Clicked", this);
    // this.state.count++   by doing this, count is incrementing but it is not known to react so msg is not passed to Real DOM
    console.log(product)
    this.setState( { count: this.state.count + 1 } )
  }

  //we have a simple react component which when rendered returns this
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
