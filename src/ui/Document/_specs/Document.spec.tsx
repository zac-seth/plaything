import * as React from 'react'
import {
  HTMLAttributes,
  shallow,
  ShallowWrapper,
} from 'enzyme'

import Document, {
  IDocumentContent,
} from '../Document'

let document: ShallowWrapper<undefined, undefined>
const props: IDocumentContent = {
  bundlePath: `the/bundle/path.js`,
  children: <div />,
  description: `A description`,
  initialData: {},
  title: `A Title`,
  vendorPath: `the/vendor/path.js`,
}

beforeEach(() => document = shallow(<Document {...props} />))

describe(`When rendering the AppContainer component`, () => {
  it(`Shouldn't throw any errors`, () => expect(document.length).toBe(1))

  it(`Should contain an html document.`, () => {
    const divNode: ShallowWrapper<HTMLAttributes, undefined> = document.find(`html`)

    expect(divNode.length).toBeGreaterThanOrEqual(1)
  })
})
