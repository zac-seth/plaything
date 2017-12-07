import * as React from 'react'

import IHeadingProps from './IHeadingProps'
import IHeadingStyles from './IHeadingStyles'

const Heading = ({ classes, content }: IHeadingProps) => {
  return <h1 className={classes.heading}>{content}</h1>
}

export default Heading
