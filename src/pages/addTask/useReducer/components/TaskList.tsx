import { type TTask } from '@/utils/dataStructure'
import './TaskList.css'

import Task from './Task'

type TaskListProps = {
  tasks: TTask[]
  onChangeTask: (task: TTask) => void
  onDelete: (task: TTask) => void
}

const TaskList = ({ tasks, onChangeTask, onDelete }: TaskListProps) => {
  return (
    <ul>
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

export default TaskList
