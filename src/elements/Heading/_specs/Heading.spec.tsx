import * as React from 'react'
import {
  HTMLAttributes,
  shallow,
  ShallowWrapper,
} from 'enzyme'

import Heading, {
  HeadingType,
} from 'elements/Heading/Heading'

const testName = `Zac`

let heading: ShallowWrapper<undefined, undefined>

beforeEach(() => heading = shallow(<Heading type={HeadingType.PAGE_TITLE} content={testName} />))

describe(`When rendering the Heading component`, () => {
  it(`Should render without any error.`, () => expect(heading.length).toBe(1))

  it(`Should render an h1 element`, () => {
    const h1Node: ShallowWrapper<HTMLAttributes, undefined> = heading.find(`h1`)

    console.log(heading.hostNodes())

    expect(h1Node.length).toBe(1)
  })
})