import * as React from 'react'

export enum HeadingType {
  PAGE_TITLE = 0,
  PAGE_SUB_TITLE = 1,
}

export interface IHeadingProps {
  content: string
  type: HeadingType
}

const renderPageTitle = (content: string) => <h1>{content}</h1>

const renderPageSubTitle = (content: string) => <h2>{content}</h2>

const Heading = ({ content, type = HeadingType.PAGE_TITLE }: IHeadingProps) => {
  switch (type) {
    case HeadingType.PAGE_SUB_TITLE:
      return renderPageSubTitle(content)
    case HeadingType.PAGE_TITLE:
    default:
      return renderPageTitle(content)
  }
}

export default Heading
