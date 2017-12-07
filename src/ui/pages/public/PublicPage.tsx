import * as React from 'react'

import Heading from 'ui/elements/Heading'
import IHeadingProps from 'ui/elements/Heading/IHeadingProps'

import IPageProps from 'ui/pages/IPageProps'
import Page from 'ui/pages/Page'

abstract class Public<TPageState = undefined> extends Page<TPageState> {
  constructor(props: IPageProps) {
    super(props)
  }

  abstract getHeadingContent(): IHeadingProps

  render() {
    return (
      <div>
        <Heading {...this.getHeadingContent()} />
      </div>
    )
  }
}

export default Public
