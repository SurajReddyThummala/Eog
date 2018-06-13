import React, { Component } from 'react';
import TaskRow from './TaskRow';
class Main extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }

  render() {
    return (
      <div>
        <h2>Todo</h2>
        <hr />
        <button style={{
          backgroundColor: '#47bbf6', width: '10em', height: '3em', color: 'white'
        }} onClick={() => this.props.togglePage()}> Add new task</button>
        <TaskRow {...this.props} />
      </div>
    );
  }
}

export default Main;