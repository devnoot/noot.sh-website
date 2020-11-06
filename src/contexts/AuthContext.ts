import { createContext } from 'react'

interface Authorization {
  isLoggedIn: boolean
  isAdmin: boolean
  permissions: string[]
}

export const AuthContext = createContext<Authorization>({
  isLoggedIn: false,
  isAdmin: false,
  permissions: [],
})
