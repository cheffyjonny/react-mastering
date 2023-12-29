/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { type TTask } from '@/utils/dataStructure'
import Task from './Task'

type TaskListProps = {
  tasks: TTask[]
  onChangeTask: (task: TTask) => void
  onDelete: (taskId: number) => void
}

const TaskList = ({ tasks, onChangeTask, onDelete }: TaskListProps) => {
  return (
    <ul css={ul}>
      {tasks.map((task) => (
        <Task
          onChange={onChangeTask}
          onDelete={onDelete}
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  )
}

const ul = css`
  list-style: none;
  padding: 0;
`

export default TaskList
