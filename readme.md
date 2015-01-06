# Kirby **♥** Foundation, Fontawesome & Grunt

This ist the [kirby-starterkit](https://github.com/getkirby/starterkit) with a fully functional [grunt-script](http://gruntjs.com), [Fontawesome](http://fortawesome.github.io/Font-Awesome/) as Iconfont and [foundation](http://foundation.zurb.com) as CSS-Framework.

## How to use:

```
git clone --recursive git@github.com:ausminternet/kirby-grunt-foundation.git
cd kirby-grunt-foundation
npm install
bower install
grunt build
```

## Grunt tasks:

* ```grunt build-bower```: build all bower-dependencies.
* ```grunt build```: build the page (includes ```grunt build-bower```)
* ```grunt deploy```: copy all relevant files to ```/dist``` for deployment (includes ```grunt build```)
* ```grunt watch```: watches changes in:
  - ```assets/scss/*.scss```: build css and inject in page
  - ```assets/js/*.js```: build js and reload page
  - ```site/**/*.php```: reload page

```grunt watch``` will start a livereload-server, see ```site/snippets/footer.php```.
The script-tag which includes the server will be removed on ```grunt deploy```.
