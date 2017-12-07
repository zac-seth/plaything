import IStyledProps from '../IStyledProps'
import IHeadingStyles from './IHeadingStyles'

interface IHeadingProps extends IStyledProps<IHeadingStyles> {
  content: string
}

export default IHeadingProps
