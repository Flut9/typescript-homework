import { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react'
import { initialState, mainReducer } from '../../store'
import { Action, Store } from '../../store/main-store'

export const Context = createContext<{
  state: Store,
  dispatch: Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null,
})

type StoreProviderProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useStore = () => useContext(Context)
