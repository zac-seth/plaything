import * as React from 'react'

import IPageProps from 'ui/pages/IPageProps'
import PublicPage from 'ui/pages/public/PublicPage'

import IHeadingProps from 'ui/elements/Heading/IHeadingProps'

class HomePage extends PublicPage {
  constructor(props: IPageProps) {
    super(props)
  }

  getHeadingContent(): IHeadingProps {
    return {
      content: `Welcome to the New Home Page`
    };
  }
}

export default HomePage
