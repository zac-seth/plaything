import * as React from 'react'

export interface IAppContainerProps {
  children: JSX.Element | JSX.Element[],
}

const AppContainer = ({ children }: IAppContainerProps) => (
  <div>
    {children}
  </div>
)

export default AppContainer
