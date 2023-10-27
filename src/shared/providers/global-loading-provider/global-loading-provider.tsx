import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

type LoaderState = {
  key: string,
  isLoading: boolean
}

type LoaderType = Record<string, boolean>

export type GlobalLoadingContextValueType = {
  loaders: LoaderType,
  setGlobalLoading: ({ key, isLoading }: LoaderState) => void,
  removeGlobalLoading: (key: string) => void
}

export const GlobalLoadingContext = createContext<GlobalLoadingContextValueType>({
  loaders: {},
  setGlobalLoading: ({ key, isLoading }: LoaderState): void => {},
  removeGlobalLoading: (key: string): void => {}
})

type GlobalLoadingProviderProps = {
  children: ReactNode
}

export const GlobalLoadingProvider = ({ children }: GlobalLoadingProviderProps) => {
  const [loaders, setLoader] = useState<LoaderType>({})

  const setGlobalLoading = useCallback(({ key, isLoading }: LoaderState) => {
    setLoader((prevLoaders) => ({ ...prevLoaders, [key]: isLoading }))
  }, [])

  const removeGlobalLoading = useCallback(
    (key: string) => {
      if (!loaders[key]) {
        return
      }

      const newLoaders = { ...loaders }
      delete newLoaders[key]
    },
    [loaders],
  )

  const value: GlobalLoadingContextValueType = useMemo(
    () => ({
      loaders,
      setGlobalLoading,
      removeGlobalLoading,
    }),
    [loaders, setGlobalLoading, removeGlobalLoading],
  )

  return (
    <GlobalLoadingContext.Provider value={value}>
      {children}
    </GlobalLoadingContext.Provider>
  )
}
