import * as React from 'react'
import {
  HTMLAttributes,
  shallow,
  ShallowWrapper,
} from 'enzyme'

import AppContainer from '../AppContainer'

let appContainer: ShallowWrapper<undefined, undefined>

beforeEach(() => appContainer = shallow(<AppContainer><div /></AppContainer>))

describe(`When rendering the AppContainer component`, () => {
  it(`Shouldn't throw any errors`, () => expect(appContainer.length).toBe(1))

  it(`Should render the correct child element`, () => {
    const divNode: ShallowWrapper<HTMLAttributes, undefined> = appContainer.children().find(`div`)

    expect(divNode.length).toBe(1)
  })
})
