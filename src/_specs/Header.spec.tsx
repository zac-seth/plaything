import * as React from 'react'
import {
  HTMLAttributes,
  shallow,
  ShallowWrapper,
} from 'enzyme'

import Heading from '../Heading'

const testName = `Zac`

let heading: ShallowWrapper<undefined, undefined>

beforeEach(() => heading = shallow(<Heading name={testName} />))

describe(`When rendering the Heading component`, () => {
  it(`Should render without any error.`, () => expect(heading.length).toBe(1))

  it(`Should render an h1 element`, () => {
    const h1Node: ShallowWrapper<HTMLAttributes, undefined> = heading.find(`h1`)

    expect(h1Node.length).toBe(1)
  })
})
