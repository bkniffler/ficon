import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createRenderer } from 'fela';
import { Provider as FelaProvider, ThemeProvider } from 'react-fela';
import FiconFela from '../src';
import { renderToMarkup } from 'fela-dom';
import Comp from '../../ficon/src/icons/fa-font-awesome-logo-full';

const getProvider = (fela: any, theme = {}) => {
  const Provider: React.SFC = ({ children }) => (
    <FelaProvider rehydrate renderer={fela}>
      <ThemeProvider theme={theme}>
        <FiconFela>{children}</FiconFela>
      </ThemeProvider>
    </FelaProvider>
  );
  return Provider;
};

describe('SVG', () => {
  it('should render correctly (default color)', () => {
    const fela = createRenderer();
    const Provider = getProvider(fela);
    const component = renderer.create(
      <Provider>
        <Comp size={12} />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });

  it('should render correctly (inverted)', () => {
    const fela = createRenderer();
    const Provider = getProvider(fela, { inverted: true });
    const component = renderer.create(
      <Provider>
        <Comp size={12} />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });

  it('should render correctly (theme color)', () => {
    const fela = createRenderer();
    const Provider = getProvider(fela, { color: 'blue' });
    const component = renderer.create(
      <Provider>
        <Comp size={12} color />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });

  it('should render correctly (red)', () => {
    const fela = createRenderer();
    const Provider = getProvider(fela);
    const component = renderer.create(
      <Provider>
        <Comp size={12} color="red" />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });
});
