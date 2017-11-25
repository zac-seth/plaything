import * as express from 'express'
import * as React from 'react'
import {
  renderToNodeStream,
  renderToString,
} from 'react-dom/server'
import App from './App'
import Document from './Document'

const server = express()

server.use(`/assets`,   express.static(`assets`))

server.get(`/`, (request, response) => {
  const initialData = {
    name: `Zac`,
  }

  renderToNodeStream(
    <Document
      bundlePath="/assets/bundle.js"
      description="A plaything."
      initialData={JSON.stringify(initialData)}
      title="Plaything Inc"
      >
      <App {...initialData} />
    </Document>
  ).pipe(response)
})

server.listen(3000)
