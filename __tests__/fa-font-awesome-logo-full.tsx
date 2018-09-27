import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import { renderToMarkup } from 'fela-dom';

import Comp from '../src/icons/fa-font-awesome-logo-full';

describe('FaFontAwesomeLogoFull', () => {
  it('should render correctly', () => {
    const fela = createRenderer();

    const component = renderer.create(
      <Provider rehydrate renderer={fela}>
        <Comp size={16}>Test</Comp>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot('markup');
    expect(renderToMarkup(fela)).toMatchSnapshot('css');
  });
});
