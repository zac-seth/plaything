import { Component } from 'react'

export interface IPageProps {
  pageKey: string,
}

export default abstract class Page<TPageState = undefined> extends Component<IPageProps, TPageState> {
  constructor(props: IPageProps) {
    super(props)
  }
}
