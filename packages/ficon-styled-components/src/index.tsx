import * as React from 'react';
import { Provider, SvgPropTypes } from 'ficon-core';
import styled, { keyframes, css } from 'styled-components';

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

const Svg = styled<SvgPropTypes>(({ size, color, spin, ...rest }) => (
  <svg {...rest} />
))`
  width: ${({ size }) => size || '1em'};
  height: ${({ size }) => size || '1em'};
  animation: ${({ spin }) =>
    spin
      ? css`
          ${rotate360} 2s linear infinite;
        `
      : ''};
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
