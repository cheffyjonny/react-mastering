/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { useState } from 'react'
import { type TTask } from '@/utils/dataStructure'

type TaskProps = {
  task: TTask
  onChange: (task: TTask) => void
  onDelete: (taskId: number) => void
}

const Task = ({ task, onChange, onDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false)
  let taskContent

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.title !== null ? task.title : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange({
              ...task,
              title: e.target.value,
            })
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        <p key={task.id}>{task.title}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <li css={li}>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange({
            ...task,
            isDone: e.target.checked,
          })
        }}
      />
      {taskContent}
      <button
        css={button}
        onClick={() => {
          onDelete(task.id)
        }}
      >
        Delete
      </button>
    </li>
  )
}

const button = css`
  height: 3vh;
`
const li = css`
  display: flex;
  width: 180px;
  justify-content: space-between;
  align-items: center;
`
export default Task
