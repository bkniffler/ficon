import * as React from 'react';

export interface StyledPropTypes {
  color?: string | boolean;
  spin?: boolean;
  rotate?: number;
  size?: number | string;
  onClick?: ((event: React.MouseEvent<SVGSVGElement>) => void) | undefined;
}

export interface SvgPropTypes extends StyledPropTypes {
  xmlns?: string;
  viewBox?: string;
}

export const defaultComponent: React.ComponentType<SvgPropTypes> = ({
  children,
  size = '1em',
  color,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color && color !== true ? `${color}` : undefined}
      {...rest}
    >
      {children}
    </svg>
  );
};

const Context: React.Context<
  React.ComponentType<SvgPropTypes>
> = React.createContext(defaultComponent);

const FiconConsumer: React.ComponentType<SvgPropTypes> = props => (
  <Context.Consumer>{Svg => <Svg {...props} />}</Context.Consumer>
);

export const Provider = Context.Provider;
export default FiconConsumer;
