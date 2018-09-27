import * as React from 'react';
import { Provider, SvgPropTypes } from 'ficon-core';
//@ts-ignore
import { createComponent } from 'react-fela';

const getStyle = (props: any) => {
  const { theme, color, size = '1em' } = props;
  return {
    width: size,
    height: size,
    fill:
      color === true
        ? theme.color
        : typeof color === 'string'
          ? theme[color] || color
          : theme.inverted
            ? theme.light
            : theme.dark
  };
};

const Svg: React.ComponentType<SvgPropTypes> = createComponent(
  getStyle,
  'svg',
  [
    'onClick',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseOver',
    'onMouseDown',
    'viewBox',
    'xmlns'
  ]
);

const FelaFiconProvider: React.ComponentType = ({ children }) => (
  <Provider value={Svg}>{children}</Provider>
);

export default FelaFiconProvider;
