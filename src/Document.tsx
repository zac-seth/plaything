import * as React from 'react'

export interface IDocumentContent {
  bundlePath: string,
  children: JSX.Element,
  description: string,
  initialData: any,
  title: string,
}

const Document = ({ bundlePath, children, description, initialData, title}: IDocumentContent) => (
  <html>
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
    <body>
      <div id="app">{children}</div>
      <script id="initial-data" type="text/plain" data-json={initialData} />
      <script src={bundlePath} />
    </body>
  </html>
)

export default Document
