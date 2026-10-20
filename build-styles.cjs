// Run `node build-styles.cjs` after editing a stylesheet in style-sources.json.
// Sources stay separate; the browser gets one stylesheet in the same cascade order.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = __dirname;
const sources = JSON.parse(fs.readFileSync(path.join(root, 'style-sources.json'), 'utf8'));
const css = sources.map(file => `/* ${file} */\n${fs.readFileSync(path.join(root, file), 'utf8')}`).join('\n');
const version = crypto.createHash('sha256').update(css).digest('hex').slice(0, 12);
fs.writeFileSync(path.join(root, 'styles.css'), css);
const entry = path.join(root, 'index.html');
fs.writeFileSync(entry, fs.readFileSync(entry, 'utf8').replace(/styles\.css\?v=[^"\s]+/, `styles.css?v=${version}`));
console.log(`Built ${sources.length} stylesheets: styles.css?v=${version}`);
