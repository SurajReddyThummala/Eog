import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './AddTask.css'
class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskTitle: '',
      taskDesc: '',
      isTaskCompleted: false,
      taskIndex: -1
    }
  }
  componentDidMount() {
    console.log('componentDidMount', this.props);
    if (this.props.currentRow) {
      this.setState({
        taskTitle: this.props.currentRow.title,
        taskDesc: this.props.currentRow.desc,
        isTaskCompleted: this.props.currentRow.isCompleted,
        taskIndex: this.props.currentRow.id
      })
    }

  }

  addtask = () => {
    const { taskTitle, taskDesc, isTaskCompleted, taskIndex } = this.state;
    this.props.addTask({
      id: taskIndex > -1 ? taskIndex : null,
      title: taskTitle,
      desc: taskDesc,
      isCompleted: isTaskCompleted
    })
  }
  completeCurrentTask = () => {
    const { taskIndex } = this.state;
    // if (taskIndex > -1) {
    this.setState({
      isTaskCompleted: true
    })
    // }
  }
  render() {
    const { taskTitle, taskDesc, isTaskCompleted, taskIndex } = this.state;
    return (
      <div>
        <button style={{ fontWeight: 'bold' }} onClick={() => this.props.togglePage()}>&lt; Back to Task</button>
        <div style={{ 'margin-top': '1em' }}>
          <span style={{
            width: '100%',
            float: 'left'
          }}>task</span>
          <input type="text" className="text-line" onChange={(e) => { this.setState({ taskTitle: e.target.value }) }} value={taskTitle} />
          <button style={{ backgroundColor: '#E4E4E4' }} disabled={(taskIndex > -1 && !isTaskCompleted ? false : true)} onClick={this.completeCurrentTask}> Complete</button>
        </div>
        <div>
          <span style={{
            width: '100%',
            float: 'left',
            'margin-top': '1em',
          }}>Description</span>
          <input type="text" className="text-line" onChange={(e) => { this.setState({ taskDesc: e.target.value }) }} value={taskDesc} />
        </div>
        <div style={{ 'margin-top': '2em', }}>
          <button className="saveButton" onClick={this.addtask} disabled={(taskTitle === '' ? true : false)}> Save</button>
          <button className="cancelButton" onClick={() => this.props.togglePage()}> Cancel</button>
          <button className="deleteButton" onClick={() => this.props.deleteTask(taskIndex)} disabled={(taskIndex > -1 ? false : true)}> Delete</button>
        </div>

      </div>
    );
  }
}

export default AddTask;