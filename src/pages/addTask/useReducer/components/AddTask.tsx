import { useState } from 'react'

type OnAddTaskProps = {
  onAddTask: (text: string | null) => void
  errorMsg: string | null
}
type Text = string | null

const AddTask = ({ onAddTask, errorMsg }: OnAddTaskProps) => {
  const [text, setText] = useState<Text>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleAddTask = () => {
    setText('')
    onAddTask(text)
  }

  return (
    <div>
      <input
        autoFocus
        name='text'
        value={text !== null ? text : ''}
        onChange={handleChange}
        placeholder='Type title here'
      />
      <button onClick={handleAddTask}>Add</button>
      {errorMsg && <p>Error!!</p>}
    </div>
  )
}

export default AddTask
