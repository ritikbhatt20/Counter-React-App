import React, { Component } from "react";

class Counter extends Component {
  // state is basically an object that includes any data that this component needs
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };
  // I will be making this a controlled component by removing local state.. It receives data using only props 

  style = {
    fontSize: "50px",
    fontWeight: "bold",
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //   constructor(){
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //   }

  // handleIncrement = () => {
  //   // console.log("Increment Clicked", this);
  //   // this.state.count++   by doing this, count is incrementing but it is not known to react so msg is not passed to Real DOM
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  //we have a simple react component which when rendered returns this
  render() {
    // console.log("props", this.props); // every react component has a property called props which includes all the attributes from counters component 

    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
