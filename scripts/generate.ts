import * as fs from 'fs-extra';
import { resolve, basename } from 'path';
import { upperFirst, camelCase } from 'lodash';
import * as glob from 'glob-promise';

const outDir = resolve(__dirname, '..', 'src', 'icons');

const work = async (faPackage: string, faTypes: Array<string>) => {
  let index = '';
  const template = fs.readFileSync(resolve(__dirname, 'TEMPLATE'), {
    encoding: 'utf8'
  });

  const files = faTypes.reduce((state: Array<string>, faType) => {
    const files = glob.sync(
      `../node_modules/@fortawesome/fontawesome-${faPackage}/svgs/${faType}/*.svg`,
      {
        cwd: __dirname
      }
    );
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

    const content: string = fs.readFileSync(resolve(__dirname, file), {
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
      template
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

work(process.argv[2], process.argv[3].split(','));
