import React, { Component } from 'react';

class Textwrap extends Component {

  state = {
    doSomething: ''
  }

  handleChange = (e) => {
    this.setState({
      doSomething: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const textBox = document.getElementById('textBox');
    if( textBox.value === '' || textBox.value === undefined ){
      alert('뭐라도 좀 쓰시지?!');
      return false;
    }

    this.props.onCreate(this.state);
    this.setState({
      doSomething: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          id="textBox"
          type="text"
          placeholder="뭐할껀데?!?!?"
          onChange={this.handleChange}
          value={this.state.doSomething} />
        <button id="btn_add" type="submit">ADD</button>
      </form>
    );
  }
}

export default Textwrap;