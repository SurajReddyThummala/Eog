
import React from 'react'

import './TaskRow.css'

const TaskRow = (props) => {
  return props.tasks.map((task, index) => {
    let textStyle = task.isCompleted ? { 'text-decoration': 'line-through' } : {}
    return (
      <div className={'card'}>
        <span onClick={() => props.openRow(index, task.id)} style={{ ...textStyle, width: '60%', float: 'left', marginLeft: '2em' }}>{task.title} </span>
        <button style={{ background: '#E4E4E4', marginLeft: '2em', width: '20%', }} disabled={task.isCompleted} onClick={() => props.completeTask(index)}>complete</button>
        <span style={{ width: '5%', float: 'right' }} onClick={() => props.deleteTask(task.id)}>X</span>
      </div>
    )
  })
}

export default TaskRow;


// width: 70 %;
// float: left;
// margin - left: 1em;