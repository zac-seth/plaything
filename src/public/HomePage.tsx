import * as React from 'react'

import { IPageProps } from 'elements/page/Page'
import PublicPage from 'elements/page/PublicPage'

import {
  IHeadingProps,
  HeadingType,
} from 'elements/sectioning/Heading'

class HomePage extends PublicPage {
  constructor(props: IPageProps) {
    super(props)
  }

  getHeadingContent(): IHeadingProps {
    return {
      content: `Welcome to the Home Page`
    };
  }
}

export default HomePage
