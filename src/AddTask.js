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
      isTaskCompleted: false
    }
  }
  componentDidMount() {
    console.log('componentDidMount', this.props);
    if (this.props.currentRow) {
      this.setState({
        taskTitle: this.props.currentRow.title,
        taskDesc: this.props.currentRow.desc,
        isTaskCompleted: this.props.currentRow.isCompleted
      })
    }

  }

  addtask = () => {
    const { taskTitle, taskDesc, isTaskCompleted } = this.state;
    this.props.addTask({
      title: taskTitle,
      desc: taskDesc,
      isCompleted: isTaskCompleted
    })
  }
  render() {
    const { taskTitle, taskDesc, isTaskCompleted } = this.state;
    return (
      <div>
        <button style={{ backgroundColor: 'red' }} onClick={() => this.props.togglePage()}>back</button>
        {/* <div className="input-group mb-3" style={{ display: 'flex' }}>
          <input type="text" className="form-control" placeholder="Add task" aria-label="Add task" aria-describedby="basic-addon2" />
          <Button >Complete</Button>
        </div>
        <div className="input-group mb-3" style={{ display: 'flex' }}>
          <input type="text" className="form-control" placeholder="Description" aria-label="Add task" aria-describedby="basic-addon2" />
        </div> */}
        <div>
          <span>task</span>
          <input type="text" class="text-line" onChange={(e) => { this.setState({ taskTitle: e.target.value }) }} value={taskTitle} />
          <button style={{ backgroundColor: 'gray' }} > Complete</button>
        </div>
        <div>
          <span>Description</span>
          <input type="text" class="text-line" onChange={(e) => { this.setState({ taskDesc: e.target.value }) }} value={taskDesc} />
        </div>
        <div>
          <button style={{ backgroundColor: 'gray' }} onClick={this.addtask}> Save</button>
          <button style={{ backgroundColor: 'gray' }} onClick={() => this.props.togglePage()}> Cancel</button>
          <button style={{ backgroundColor: 'gray' }}> Delete</button>
        </div>

      </div>
    );
  }
}

export default AddTask;