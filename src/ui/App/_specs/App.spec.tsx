import * as React from 'react'
import {
  HTMLAttributes,
  shallow,
  ShallowWrapper,
} from 'enzyme'

import App, {
  IAppProps,
} from '../App'

let app: ShallowWrapper<undefined, undefined>
const props: IAppProps = {
  name: `app`,
}

beforeEach(() => app = shallow(<App {...props} />))

describe(`When rendering the AppContainer component`, () => {
  it(`Shouldn't throw any errors`, () => expect(app.length).toBe(1))

  it(`Should contain routes`, () => {
    const divNode: ShallowWrapper<HTMLAttributes, undefined> = app.children().find(`Route`)

    expect(divNode.length).toBeGreaterThanOrEqual(1)
  })
})
