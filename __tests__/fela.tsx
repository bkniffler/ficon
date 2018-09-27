import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createRenderer } from 'fela';
import { Provider, ThemeProvider } from 'react-fela';
import { renderToMarkup } from 'fela-dom';

import Svg from '../src/fela';

describe('SVG', () => {
  it('should render correctly (default color)', () => {
    const fela = createRenderer();

    const component = renderer.create(
      <Provider rehydrate renderer={fela}>
        <Svg size={12} />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });

  it('should render correctly (inverted)', () => {
    const fela = createRenderer();

    const component = renderer.create(
      <Provider rehydrate renderer={fela}>
        <ThemeProvider theme={{ inverted: true }}>
          <Svg size={12} />
        </ThemeProvider>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });

  it('should render correctly (theme color)', () => {
    const fela = createRenderer();

    const component = renderer.create(
      <Provider rehydrate renderer={fela}>
        <ThemeProvider theme={{ color: 'blue' }}>
          <Svg size={12} color />
        </ThemeProvider>
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });

  it('should render correctly (red)', () => {
    const fela = createRenderer();

    const component = renderer.create(
      <Provider rehydrate renderer={fela}>
        <Svg size={12} color="red" />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });
});
