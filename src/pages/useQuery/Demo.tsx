import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTodo, fetchTodos } from './api'
import TodoCard from './components/TodoCard'
import { Todo } from './entities/Todo'
import { useState } from 'react'

const Demo = () => {
  const queryClient = useQueryClient()

  const [title, setTitle] = useState('')
  const [search, setSearch] = useState('')

  // React query caches by default according to queryKey.
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ['todos', { search }], // Every parameters passed on to the function, every parameters that depend on the function
    staleTime: Infinity, //Even if the data is the same, it won't fetch the data in the background. (By default, it fetches again, if the data is the same.)
  })

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ title })
              setTitle('')
            } catch (e) {
              console.log(e)
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos?.map((todo: Todo) => {
        {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
            ></TodoCard>
          )
        }
      })}
    </div>
  )
}

export default Demo
