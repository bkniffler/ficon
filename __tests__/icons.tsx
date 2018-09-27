import 'jest';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import * as Icons from '../src';

describe('Icons', () => {
  it('should render correctly', () => {
    const libCount = readdirSync(resolve(__dirname, '../lib/icons')).filter(p =>
      p.endsWith('.js')
    ).length;
    const srcCount = readdirSync(resolve(__dirname, '../src/icons')).length;
    expect(libCount).toEqual(srcCount);
    expect(Object.keys(Icons).length).toEqual(libCount);
  });
});
