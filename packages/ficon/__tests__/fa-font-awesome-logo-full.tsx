import 'jest';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Comp from '../src/icons/fa-font-awesome-logo-full';

describe('FaFontAwesomeLogoFull', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Comp size={16}>Test</Comp>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
