const path = require('path')

module.exports = {
  pluginPaths: [
    path.resolve(__dirname, '../../lib')
  ],
  blueprintPaths: [
    path.resolve(__dirname, '../fixtures/blueprints/welcome-blueprint')
  ]
}
