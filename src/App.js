import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './AddTask';
import Main from './Main';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHomePage: true,
      currentSelected: -1,
      tasks: [{
        id: 0, title: 'abc', desc: 'random 1', isCompleted: false
      },
      {
        id: 1, title: 'cde', desc: 'random 2', isCompleted: false
      },
      {
        id: 2, title: 'efg', desc: 'random 3', isCompleted: false
      },
      {
        id: 3, title: 'ijk', desc: 'random 4', isCompleted: false
      }],
    }
  }
  toggle = () => {
    this.setState({
      isHomePage: !this.state.isHomePage,
      currentSelected: -1
    })
  }
  addTask = (task) => {
    let { tasks } = this.state;
    task['id'] = tasks.length;
    tasks.push(task);
    this.setState({ tasks, isHomePage: true, currentSelected: -1 })
  }
  deleteTask = (index) => {
    // update code to remove by id
    console.log('deleted task called', index)
    let { tasks } = this.state;
    console.log('task bfore deletion', tasks)
    tasks.splice(index, 1)
    console.log('task after deletion', tasks)
    this.setState({
      tasks,
      isHomePage: true, currentSelected: -1
    })
  }
  openSelectedRow = (index) => {
    console.log('index is clicked', index);
    this.setState({
      isHomePage: !this.state.isHomePage,
      currentSelected: index,
    })
  }
  completeTask = (index) => {
    let { tasks } = this.state;
    tasks[index]['isCompleted'] = true;
    this.setState({ tasks })
  }
  render() {
    const { isHomePage, tasks, currentSelected } = this.state;
    console.log('task', tasks);
    return (
      <div className="App">{
        isHomePage ? <Main togglePage={this.toggle} tasks={tasks} openRow={this.openSelectedRow} completeTask={this.completeTask} />
          :
          <AddTask
            togglePage={this.toggle}
            addTask={this.addTask}
            currentRow={currentSelected === -1 ? null : tasks[currentSelected]}
            deleteTask={this.deleteTask}
          />
      }
      </div>
    );
  }
}

export default App;
