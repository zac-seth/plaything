import * as React from 'react'

import Page, { IPageProps } from 'elements/page/Page'
import Heading, { IHeadingProps } from 'elements/sectioning/Heading'

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
    );
  }
}

export default Public
