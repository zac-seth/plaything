import * as React from 'react'
import { Route } from 'react-router'

import HomePage from 'ui/pages/public/Home'

export interface IAppProps {
  name: string,
}

const App = ({ name }: IAppProps) => (
  <Route exact path="/" component={HomePage} />
)

export default App
