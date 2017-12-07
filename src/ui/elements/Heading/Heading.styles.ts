import injectSheet from 'react-jss'

import IHeadingStyles from './IHeadingStyles'

const styles: IHeadingStyles = {
  heading: {
    textDecoration: `underline`
  }
}

export default injectSheet(styles)
