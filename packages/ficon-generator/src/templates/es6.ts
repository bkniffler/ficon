export default () => `
import * as React from 'react';
import Svg from 'ficon-core';

const icon = props => (
  <Svg 'attributes'{...props}>'content'</Svg>
);

icon.displayName = 'name';

export default icon;
`;
