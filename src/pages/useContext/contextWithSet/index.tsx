import Dashboard from './Dashboard'
import UserContextProvider from './context'

interface DemoProps {}

export default function Demo({}: DemoProps) {
  return (
    <div>
      <UserContextProvider>
        <Dashboard />
      </UserContextProvider>
    </div>
  )
}
