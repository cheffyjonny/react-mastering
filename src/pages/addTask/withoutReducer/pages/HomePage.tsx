import { useState } from 'react'
import { type TTask, type ErrorMsg } from '@/utils/dataStructure'

import TaskList from '../components/TaskList'
import AddTask from '../components/AddTask'

let nextId = 1

const Home = () => {
  const [tasks, setTasks] = useState<TTask[]>([])
  const [errorMsg, setErrorMsg] = useState<ErrorMsg>(null)

  const handleAddTask = (text: string | null): void => {
    if (text === null || text === '') {
      setErrorMsg('Text is empty!')
    } else {
      const task: TTask = {
        id: nextId++,
        title: text,
        isDone: false,
      }

      setTasks([...tasks, task])
      setErrorMsg(null)
    }
  }

  const handleChangeTask = (task: TTask) => {
    setTasks(
      tasks.map((t: TTask) => {
        if (t.id === task.id) {
          return task
        } else {
          return t
        }
      })
    )
  }

  const handleOnDelete = (taskId: number) => {
    setTasks(
      tasks.filter((t: TTask) => {
        t.id !== taskId
      })
    )
  }

  return (
    <>
      <AddTask
        onAddTask={handleAddTask}
        errorMsg={errorMsg}
      ></AddTask>
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDelete={handleOnDelete}
      ></TaskList>
    </>
  )
}

export default Home
