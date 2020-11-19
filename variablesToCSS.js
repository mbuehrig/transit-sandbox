/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const lineReader = require('line-reader');
const Promise = require('bluebird');
const fs = require('fs');

let lines = [':root {'];
const defaultFontSize = 15;

const functions = {
  pxToRem: (value) => `${value / defaultFontSize}rem`,
};

const eachLine = Promise.promisify(lineReader.eachLine);

eachLine('./src/assets/scss/_variables.scss', (line) => {
  let [variableName, value] = line.split(': ');

  value = value.slice(0, -1);
  variableName = `--${variableName.substring(1)}`;

  const funcRegex = /([A-Za-z]*)\((.*)\)/;

  const valueIsVariable = value.charAt(0) === '$';
  const valueIsFunc = funcRegex.test(value);

  if (valueIsVariable) {
    value = `var(--${value.substring(1)})`;
  } else if (valueIsFunc) {
    const [completeFunc, funcName, funcProp] = value.match(funcRegex); //eslint-disable-line

    value = functions[funcName](funcProp);
  }

  lines.push(`  ${variableName}: ${value};`);
}).then(() => {
  lines.push('}');

  lines = lines.join('\n');

  fs.writeFileSync('./src/assets/scss/_rootVariables.scss', lines);
});
