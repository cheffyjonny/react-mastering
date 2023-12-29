import { useCallback, useState } from 'react'

import Search from './Search'

// function test<T>(value: T): T[] {
//   return [value]
// }
function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const allUsers = ['john', 'alex', 'george', 'simon', 'james']

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers)

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0])
      const filteredUsers = allUsers.filter((user) => user.includes(text))
      setUsers(filteredUsers)
    },
    [users]
  )

  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setUsers(shuffle(['john', 'alex', 'george']))}>
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}
