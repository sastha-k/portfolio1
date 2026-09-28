const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
const logoBuf = fs.readFileSync(path.join(publicDir, 'logo.png'));
const b64 = logoBuf.toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image width="512" height="512" href="data:image/png;base64,${b64}" />
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');
console.log('Successfully updated public/favicon.svg with the black S logo!');
