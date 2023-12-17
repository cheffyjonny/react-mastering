import { useState } from 'react'
import './Task.css'
import { type TTask } from '@/utils/dataStructure'

type TaskProps = {
  task: TTask
  onChange: (task: TTask) => void
  onDelete: (task: TTask) => void
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
    <li>
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
        onClick={() => {
          onDelete(task)
        }}
      >
        Delete
      </button>
    </li>
  )
}

export default Task
