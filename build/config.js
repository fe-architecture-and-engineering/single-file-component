const path = require('path');

module.exports = {
  source: path.join(__dirname,'../src/my-dialog.component'),
  output: {
    path: path.join(__dirname,'../dist/my-dialog.js'),
    name: 'my-dialog'
  }
};