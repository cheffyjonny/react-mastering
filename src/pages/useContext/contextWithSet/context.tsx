import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export interface User {
  isSubscribed: boolean
  name: string
}

export interface UserContextInterface {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

const defaultState = {
  user: {
    name: '',
    isSubscribed: true,
  },
  setUser: (user: User) => {},
} as UserContextInterface

export const UserContext = createContext<UserContextInterface>(defaultState)

interface UserProviderProps {
  children: ReactNode
}

export default function UserContextProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    name: 'John',
    isSubscribed: true,
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
