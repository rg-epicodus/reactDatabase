import React, { Component } from 'react';
import './styles.css';

class ButtonClick extends Component {
  constructor(props) {
  super(props);
  this.handleOtherClick = this.handleOtherClick.bind(this);
  }
  handleOtherClick() {
    alert('handleOtherClick(): Click happened');
  }

  handleAnotherClick() {
    alert('handleAnotherClick(): Click happened');
  }

  handleClick = () => {
    alert('handleClick(): Click happened');
  }

  render() {
    return (
      <section className="main">
        <div>
          <h1>This is: ButtonClick Component</h1>
        </div>
        <div>
          <h3>Class Properties (Stage 3 Proposal)</h3>
          <button onClick={this.handleClick}>Click Me</button>
        </div>
        <div>
          <h3>Bind in Constructor (ES2015)</h3>
          <button onClick={this.handleOtherClick}>Click Me Too</button>
        </div>
        <div>
          <h3>Bind in Render</h3>
          <button onClick={this.handleAnotherClick.bind(this)}>Click Me Also</button>
        </div>
      </section>
    );
  }
}

export default ButtonClick;
