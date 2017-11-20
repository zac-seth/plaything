import * as React from 'react';

export interface IHeadingProps {
  name: string
}

const Heading = (props: IHeadingProps) => <h1>{props.name}</h1>;

export default Heading;
