const mix = require('laravel-mix');
require('laravel-mix-merge-manifest')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

//Frontend
mix.js('resources/js/frontend/app.js', 'public/frontend/js')
    .postCss('resources/css/frontend/app.css', 'public/frontend/css', [
        //
    ])
    .mergeManifest();

//Backend
// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);
