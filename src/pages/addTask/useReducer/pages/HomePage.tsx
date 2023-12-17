import { type TTask, type ErrorMsg } from '@/utils/dataStructure'
import { useReducer, useState } from 'react'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

const initialTasks: TTask[] = []

type Tasks = TTask[]
type Action = {
  type: 'addtask' | 'editTask' | 'deleteTask'
  payload: TTask
}

function reducer(tasks: Tasks, action: Action) {
  switch (action.type) {
    case 'addtask': {
      return [...tasks, action.payload]
    }

    case 'editTask': {
      return tasks.map((t: TTask) => {
        if (t.id === action.payload.id) {
          return action.payload
        } else {
          return t
        }
      })
    }

    case 'deleteTask': {
      return tasks.filter((t: TTask) => t.id !== action.payload.id)
    }

    default:
      return tasks
  }
}

const HomePage = () => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks)
  const [errorMsg, setErrorMsg] = useState<ErrorMsg>(null)

  const handleAddTask = (text: string | null) => {
    if (text === null || text === '') {
      setErrorMsg('Text is empty!')
    } else {
      dispatch({
        type: 'addtask',
        payload: {
          id: 1,
          title: text,
          isDone: false,
        },
      })
    }
  }

  const handleEditTask = (task: TTask) =>
    dispatch({
      type: 'editTask',
      payload: {
        id: task.id,
        title: task.title,
        isDone: task.isDone,
      },
    })

  const handleDeleteTask = (task: TTask) =>
    dispatch({
      type: 'deleteTask',
      payload: {
        id: task.id,
        title: task.title,
        isDone: task.isDone,
      },
    })

  return (
    <>
      <AddTask
        onAddTask={handleAddTask}
        errorMsg={errorMsg}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </>
  )
}

export default HomePage
