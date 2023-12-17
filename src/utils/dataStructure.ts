export type TTask = {
  id: number
  title: string
  isDone: boolean
}

export type ErrorMsg = string | null

export type Action = {
  type: 'addTask' | 'editTask' | 'deleteTask'
  id: number
  title: string
}
