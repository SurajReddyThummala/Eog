import React, { Component } from 'react';
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
    //console.log('componentDidMount', this.props);
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
    this.setState({
      isTaskCompleted: true
    })
  }
  render() {
    const { taskTitle, taskDesc, isTaskCompleted, taskIndex } = this.state;
    return (
      <div>
        <button style={{ fontWeight: 'bold' }} onClick={() => this.props.togglePage()}>&lt; Back to Task</button>
        <div style={{ marginTop: '1em' }}>
          <span style={{
            width: '100%',
            float: 'left'
          }}>task</span>
          <input type="text" className="text-line" onChange={(e) => { this.setState({ taskTitle: e.target.value }) }} value={taskTitle} />
          <button className="completeButton" disabled={(taskIndex > -1 && !isTaskCompleted ? false : true)} onClick={this.completeCurrentTask}> Complete</button>
        </div>
        <div>
          <span style={{
            width: '100%',
            float: 'left',
            marginTop: '1em',
          }}>Description</span>
          <input type="text" className="text-line" onChange={(e) => { this.setState({ taskDesc: e.target.value }) }} value={taskDesc} />
        </div>
        <div style={{ marginTop: '2em', }}>
          <button className="saveButton" onClick={this.addtask} disabled={(taskTitle === '' ? true : false)}> Save</button>
          <button className="cancelButton" onClick={() => this.props.togglePage()}> Cancel</button>
          <button className="deleteButton" onClick={() => this.props.deleteTask(taskIndex)} disabled={(taskIndex > -1 ? false : true)}> Delete</button>
        </div>

      </div>
    );
  }
}

export default AddTask;