import * as React from 'react'
import { Route } from 'react-router'

import AppContainer from 'elements/base/AppContainer'

import HomePage from 'public/HomePage'

export interface IAppProps {
  name: string,
}

const App = ({ name }: IAppProps) => (
  <AppContainer>
    <Route exact path="/" component={HomePage} />
  </AppContainer>
)

export default App
