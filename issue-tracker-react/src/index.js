import React from "react";
import ReactDOM from "react-dom";

class IssueTracker extends React.Component {
  render() {
    return(
      <div>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </div>
    )
  }
}

class IssueCard extends React.Component {
  render() {
    return(
      <h1>this is a IssueCard component</h1>
    )
  }
}

ReactDOM.render(<IssueTracker />, document.getElementById("root"));