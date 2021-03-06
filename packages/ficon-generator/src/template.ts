export default () => `
import * as React from 'react';
import Svg, { StyledPropTypes } from 'ficon-core';

const icon: React.SFC<StyledPropTypes> = props => (
  <Svg 'attributes'{...props}>'content'</Svg>
);

icon.displayName = 'name';

export default icon;
`;
