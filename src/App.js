import React, { Component } from 'react';
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
    let { id } = task;
    if (id === null) { // case of new task
      ////////console.log('going to if', task)
      task['id'] = tasks.length;
      tasks.push(task);
      this.setState({ tasks, isHomePage: true, currentSelected: -1 })
    } else { // case of update the existing
      ////////console.log('going to else', task)
      tasks[task.id] = task
      this.setState({ tasks, isHomePage: true, currentSelected: -1 })
    }

  }
  deleteTask = (id) => {
    // update code to remove by id
    ////////console.log('deleted task called', id)
    let { tasks } = this.state;
    const indexForDeletion = tasks.findIndex((item, index) => {
      return item.id === id;
    })
    ////////console.log('task bfore deletion', tasks)
    tasks.splice(indexForDeletion, 1)
    ////////console.log('task after deletion', tasks)
    this.setState({
      tasks,
      isHomePage: true, currentSelected: -1
    })
  }
  openSelectedRow = (index, id) => {
    ////////console.log('index is clicked', index);
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
    ////////console.log('task', tasks);
    return (
      <div className="App">{
        isHomePage ?
          <Main
            togglePage={this.toggle}
            tasks={tasks}
            openRow={this.openSelectedRow}
            completeTask={this.completeTask}
            deleteTask={this.deleteTask}
          />
          :
          <AddTask
            togglePage={this.toggle}
            addTask={this.addTask}
            completeTask={this.completeTask}
            currentRow={currentSelected === -1 ? null : tasks[currentSelected]}
            deleteTask={this.deleteTask}
          />
      }
      </div>
    );
  }
}

export default App;
