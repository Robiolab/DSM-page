import { createContext, useContext } from 'react'

const LinkContext = createContext({
  linkComponent: null,
  basePath: '',
})

export function LinkProvider({ linkComponent = null, basePath = '', children }) {
  return (
    <LinkContext.Provider value={{ linkComponent, basePath }}>
      {children}
    </LinkContext.Provider>
  )
}

export function useDsmLink() {
  return useContext(LinkContext)
}

export function DsmLink({ to, children, className, ...rest }) {
  const { linkComponent: LinkComp, basePath } = useContext(LinkContext)
  const href = `${basePath}${to}`

  if (LinkComp) {
    return (
      <LinkComp to={href} className={className} {...rest}>
        {children}
      </LinkComp>
    )
  }
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}
