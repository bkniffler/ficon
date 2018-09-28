import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import FiconStyled from '../src';
import { FaFontAwesome } from '../../ficon';

const getProvider = (theme = {}) => {
  const Provider: React.SFC = ({ children }) => (
    <ThemeProvider theme={theme}>
      <FiconStyled>{children}</FiconStyled>
    </ThemeProvider>
  );
  return Provider;
};

describe('styled-components', () => {
  it('should render correctly (default color)', () => {
    const Provider = getProvider();
    const component = renderer.create(
      <Provider>
        <FaFontAwesome size={12} />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render correctly (inverted)', () => {
    const Provider = getProvider({ inverted: true });
    const component = renderer.create(
      <Provider>
        <FaFontAwesome size={12} />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render correctly (theme color)', () => {
    const Provider = getProvider({ color: 'blue' });
    const component = renderer.create(
      <Provider>
        <FaFontAwesome size={12} color />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render correctly (red)', () => {
    const Provider = getProvider();
    const component = renderer.create(
      <Provider>
        <FaFontAwesome size={12} color="red" />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render correctly (spin)', () => {
    const Provider = getProvider();
    const component = renderer.create(
      <Provider>
        <FaFontAwesome size={12} spin />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
