const Parcel = require('@parcel/core').default
const config = require('@parcel/config-default')

new Parcel({
  // defaultConfig: config,
  entries: ['./src/test.js'],
  targets: {
    test: {
      distDir: 'dist',
      browsers: ['last 1 Chrome versions']
    }
  },
  sourceMaps: true,
  minify: true,
  scopeHoist: true
}).watch((err, build) => {
  if (err) console.error(err)
  console.log('build successful')
})