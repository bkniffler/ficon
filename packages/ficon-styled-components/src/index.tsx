import * as React from 'react';
import { Provider, SvgPropTypes } from 'ficon-core';
import styled from 'styled-components';

const Svg = styled<SvgPropTypes>(({ size, color, ...rest }) => (
  <svg {...rest} />
))`
  width: ${({ size }) => size || '1em'};
  height: ${({ size }) => size || '1em'};
  fill: ${({ theme, color }) => {
    return color === true
      ? theme.color
      : typeof color === 'string'
        ? theme[color] || color
        : theme.inverted
          ? theme.light
          : theme.dark;
  }};
`;

const StyledComponentsProvider: React.ComponentType = ({ children }) => (
  <Provider value={Svg}>{children}</Provider>
);

export default StyledComponentsProvider;
