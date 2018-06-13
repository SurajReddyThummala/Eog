
import React from 'react'

import './TaskRow.css'

const TaskRow = (props) => {
  return props.tasks.map((task, index) => {
    let textStyle = task.isCompleted ? { textDecoration: 'line-through' } : {}
    return (
      <div className={'card'} key={index}>
        <span onClick={() => props.openRow(index, task.id)} style={{ ...textStyle, width: '60%', float: 'left', marginLeft: '2em' }}>{task.title} </span>
        <button className={"taskRowButton"} disabled={task.isCompleted} onClick={() => props.completeTask(index)}>complete</button>
        <span style={{ width: '5%', float: 'right' }} onClick={() => props.deleteTask(task.id)}>X</span>
      </div>
    )
  })
}

export default TaskRow;


// width: 70 %;
// float: left;
// margin - left: 1em;