import * as express from 'express'
import * as React from 'react'
import {
  renderToNodeStream,
  renderToString,
} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from './App'
import Document from './Document'

const server = express()

server.use(`/dist`, express.static(`dist`))

server.get(`/`, (request, response) => {
  const initialData = {
    name: `Zac`,
  }
  const routerContext = {}

  renderToNodeStream(
    <Document
      bundlePath="/dist/client.js"
      description="A plaything."
      initialData={JSON.stringify(initialData)}
      title="Plaything Inc"
      vendorPath="/dist/vendor.js"
      >
      <StaticRouter
        location={request.url}
        context={routerContext}
        >
        <App {...initialData} />
      </StaticRouter>
    </Document>
  ).pipe(response)
})

server.listen(3000)
