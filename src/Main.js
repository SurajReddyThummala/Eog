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
        <button style={{ backgroundColor: '#47bbf6' }} onClick={() => this.props.togglePage()}> Add new task</button>
        <TaskRow tasks={this.props.tasks} openRow={this.props.openRow} />
      </div>
    );
  }
}

export default Main;