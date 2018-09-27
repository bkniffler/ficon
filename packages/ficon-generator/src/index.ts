import * as fs from 'fs-extra';
import { resolve, basename } from 'path';
import * as templates from './templates';
import { upperFirst, camelCase } from 'lodash';
import * as glob from 'glob-promise';

const outDir = resolve(process.cwd(), 'src', 'icons');
let nodeModulesPath = '';
if (fs.existsSync(resolve(__dirname, '../node_modules/@fortawesome'))) {
  // Inside ficon-generator
  nodeModulesPath = resolve(__dirname, '../node_modules/@fortawesome');
} else if (fs.existsSync(resolve(__dirname, '../../@fortawesome'))) {
  // Installed
  nodeModulesPath = resolve(__dirname, '../../@fortawesome');
} else if (
  fs.existsSync(resolve(__dirname, '../../../node_modules/@fortawesome'))
) {
  // Yarn workspace
  nodeModulesPath = resolve(__dirname, '../../../node_modules/@fortawesome');
} else {
  throw new Error('Could not find @fortawesome');
}

const work = async (
  faPackage: string,
  faTypes: Array<string>,
  template = 'es6'
) => {
  if (!templates[template]) {
    throw new Error(
      `Template ${template} does not exist. Try ${Object.keys(templates).join(
        ' or '
      )}`
    );
  }
  let index = '';

  const files = faTypes.reduce((state: Array<string>, faType) => {
    const files = glob.sync(`fontawesome-${faPackage}/svgs/${faType}/*.svg`, {
      cwd: nodeModulesPath
    });
    return [...state, ...files];
  }, []);

  await fs.ensureDir(outDir);

  let logo = false;
  files.forEach(file => {
    const rawName = basename(file);
    const fileName = `fa-${rawName.split('.')[0]}`;
    const name: string = `${upperFirst(camelCase(fileName))}`;

    // FaFontAwesomeLogoFull is present in multiple packages, so filter it out
    if (name === 'FaFontAwesomeLogoFull') {
      if (logo === true) {
        return;
      }
      logo = true;
    }

    const content: string = fs.readFileSync(resolve(nodeModulesPath, file), {
      encoding: 'utf8'
    });
    const trimmed = content
      .replace(/\<\?.+?\?\>/, '')
      .replace(/\<\!\-\-.+?\-\-\>/s, '')
      .replace('</svg>', '')
      .replace(/\<svg.+?\>/, '')
      .trim();
    const match = content.match(/\<svg.+?\>/);
    let attributes = '';
    if (match) {
      attributes = match[0].substr(5, match[0].length - 6) + ' ';
    }
    fs.writeFileSync(
      resolve(outDir, `${fileName}.tsx`),
      templates[template]()
        .replace(`'framework'`, 'fela')
        .replace(`'content'`, trimmed)
        .replace(`'attributes'`, attributes)
        .replace(`'name'`, `"${name}"`)
        .trim()
    );
    index += `\nexport { default as ${name} } from './icons/${fileName}';`;
  });
  fs.writeFileSync(resolve(outDir, '../index.ts'), index);
};

work(process.argv[2], process.argv[3].split(','), process.argv[4]);
