import * as React from 'react';
import { Provider, SvgPropTypes } from 'ficon-core';
//@ts-ignore
import { createComponent } from 'react-fela';

export interface SvgPropTypesExt extends SvgPropTypes {
  theme?: any;
}

const getStyle = (props: SvgPropTypesExt): any => {
  const { theme, color, size = '1em', spin } = props;
  let animation = spin
    ? {
        animationDuration: '2s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationName: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(359deg)'
          }
        }
      }
    : {};
  return {
    ...animation,
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
