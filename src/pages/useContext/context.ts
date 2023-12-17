import { createContext, useContext } from 'react'

import { User } from '.'

export const DashboardContext = createContext<User | undefined>(undefined)

export const useUserContext = () => {
  const user = useContext(DashboardContext)
  if (user === undefined) {
    throw Error('UseuserContext must be used with a DashboardContext')
  }
  return user
}
