
import React from 'react'

import './TaskRow.css'

const TaskRow = (props) => {
  const { currentRow } = props
  return props.tasks.map((task, index) => {
    return (
      <div className={'card'}>
        <span onClick={() => props.openRow(index)}>{task.title}</span>
        <button style={{ background: 'gray', marginLeft: '2em' }}>complete</button>
      </div>
    )
  })
}

export default TaskRow;
