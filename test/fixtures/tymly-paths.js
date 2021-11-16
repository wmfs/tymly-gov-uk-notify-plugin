const path = require('path')

module.exports = {
  pluginPaths: [
    path.resolve(__dirname, '../../lib'),
    require.resolve('@wmfs/tymly-test-helpers/plugins/mock-solr-plugin'),
    require.resolve('@wmfs/tymly-test-helpers/plugins/mock-os-places-plugin'),
    require.resolve('@wmfs/tymly-test-helpers/plugins/allow-everything-rbac-plugin'),
    require.resolve('@wmfs/tymly-cardscript-plugin'),
    require.resolve('@wmfs/tymly-pg-plugin')
  ],
  blueprintPaths: [
    path.resolve(__dirname, '../fixtures/blueprints/welcome-blueprint')
  ]
}
