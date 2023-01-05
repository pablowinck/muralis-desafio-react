const { readdirSync, readFileSync } = require('fs');
module.exports = () => {
  const folder = `${__dirname}/json`;
  const defaultFiles = readdirSync(folder);
  const files = defaultFiles.filter((file) => file.endsWith('json'));

  let data = {};

  files.forEach((file) => {
    const jsonFile = readFileSync(`${folder}/${file}`, 'utf8');
    const db = JSON.parse(jsonFile);
    data = { ...data, ...db };
  });

  return data;
};
