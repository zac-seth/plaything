import { Component } from 'react'

import IPageProps from './IPageProps'

export default abstract class Page<TPageState = undefined> extends Component<IPageProps, TPageState> {
  constructor(props: IPageProps) {
    super(props)
  }
}
