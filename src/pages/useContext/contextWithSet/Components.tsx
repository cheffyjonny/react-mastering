import { useContext } from 'react'

import { UserContext } from './context'

interface SidebarProps {}

const nameArray = ['Johnny', 'Eric', 'Mark', 'Sammy', 'Owen']

export function Sidebar({}: SidebarProps) {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed}</div>
      <button
        onClick={() => {
          setUser({ ...user, name: nameArray[Math.floor(Math.random() * 5)] })
        }}
      >
        Random pick name!
      </button>
    </div>
  )
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const { user, setUser } = useContext(UserContext)

  return <div>{user.name}</div>
}
