import { Component } from "react";

class ClassCompSample extends Component {
  state = {
    counter: 0,
    uName: "NA",
  };

  componentDidMount() {
    console.log("Mounting Done");

    const userName = localStorage.getItem("uName");
    if (userName) {
      this.setState({
        uName: userName,
      });
    }
  }

  counter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    console.log("Re-Rendering: ", this.state.counter, this.state.uName);
    return (
      <div>
        <button onClick={this.counter}>Increment</button>
        <h1>Welcome to class component: {this.state.counter}</h1>
        <p>UserName: {this.state.uName}</p>
      </div>
    );
  }
}

export default ClassCompSample;
