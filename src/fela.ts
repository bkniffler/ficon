//@ts-ignore
import { createComponent } from 'react-fela';

export interface StyledPropTypes {
  color?: string | boolean;
  size: number | string;
  theme?: any;
  onClick?: Function;
  margin?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
}

const getStyle = (props: any) => {
  const {
    theme,
    color,
    size = '1em',
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom
  } = props;
  return {
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
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

const Svg = createComponent(getStyle, 'svg', [
  'onClick',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseOver',
  'onMouseDown',
  'viewBox',
  'xmlns'
]);

export default Svg;
