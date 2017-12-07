import * as React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'ui/App'

const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'))

hydrate(
  <BrowserRouter>
    <App {...initialData} />
  </BrowserRouter>,
  document.getElementById(`app`),
)
