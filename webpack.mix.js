const mix = require('laravel-mix');
const { max } = require('lodash');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.sass', 'public/css', [
        //
    ]);


// mix.browserSync('http://127.0.0.1:8000/')