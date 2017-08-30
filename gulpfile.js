var path = require('path');
var elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

const ElementUI = 'node_modules/element-ui/lib/theme-default';

const Plugin = 'plugins/pixiu/commerce/';
const Sources = Plugin + 'components/commerce/assets/';

elixir(function(mix) {
    console.log('Building...');

    mix.webpack('main.js', Sources + '/dist/js', Sources + '/js');
    mix.less('custom.css', Sources + '/dist/css', Sources + '/css');

    console.log('Copying...');

    mix.copy(Sources + '/css/reset.css', Sources + '/dist/css/reset.css');

    console.log('Finished.');
});

