import * as React from 'react'
import { Route } from 'react-router'

import AppContainer from 'elements/AppContainer'

import Public from 'public/Public'

export interface IAppProps {
  name: string,
}

const App = ({ name }: IAppProps) => (
  <AppContainer>
    <Route exact path="/" component={Public} />
  </AppContainer>
)

export default App
