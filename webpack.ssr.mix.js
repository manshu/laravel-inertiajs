const path = require('path')
const mix = require('laravel-mix')
const nodeExternals = require('webpack-node-externals');

require('laravel-mix-merge-manifest')

mix
    .js('resources/js/frontend/ssr.js', 'public/frontend/js')
    .react()
    .alias({ '@': path.resolve('resources/js/frontend') })
    .webpackConfig({
        target: 'node',
        externals: [nodeExternals()],
    })
    .mergeManifest()