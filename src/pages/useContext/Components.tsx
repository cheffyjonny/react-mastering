import { useContext } from 'react'
import { DashboardContext, useUserContext } from './context'

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const [user, setUser] = useContext(DashboardContext)

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed}</div>
      <button onClick={() => {}}></button>
    </div>
  )
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext()

  return <div>{user.name}</div>
}
