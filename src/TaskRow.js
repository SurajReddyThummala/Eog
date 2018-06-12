
import React from 'react'

import './TaskRow.css'

const TaskRow = (props) => {
  return props.tasks.map((task, index) => {
    let textStyle = task.isCompleted ? { 'text-decoration': 'line-through' } : {}
    return (
      <div className={'card'}>
        <span onClick={() => props.openRow(index)} style={textStyle}>{task.title} </span>
        <button style={{ background: '#E4E4E4', marginLeft: '2em' }} disabled={task.isCompleted} onClick={() => props.completeTask(index)}>complete</button>
      </div>
    )
  })
}

export default TaskRow;
