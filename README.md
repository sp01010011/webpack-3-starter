## Webpack 3 Project Starter (JS)

Although all the front-end frameworks that i use on regular base mainly Angular2, ReactJS, Vuejs comes with rather a powerful
CLI tool that makes the process of creating new project pretty easy,  nevertheless, i find myself scaffolding new webpack project
whether it is to test quick idea, or to show friend or co-worker something.

Of course i could just create plain HTML file and write everything there, but i like to take advantage of everything webpack offers, from being able to use es6  features to other features  like hot reload with webpack dev server and  sass processing

### What is included (dependencies)
* [Webpack 3](https://github.com/webpack/webpack)
* [Webpack dev server](https://github.com/webpack/webpack-dev-server)
* [Sass](https://github.com/sass/node-sass)
* [Babel]( https://github.com/babel/babel-loader)
* [ES6 (es2015 preset)](https://www.npmjs.com/package/babel-preset-es2015)
* [Extract Text Webpack plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
* [Html Webpack plugin](https://github.com/jantimon/html-webpack-plugin)
* [Bulma CSS Framework](http://bulma.io)


### How to use it
1. Clone the repository and go into the directory  where you cloned the repository ( e.g. `cd webpacke-3-starter`)
* `npm` or `yarn` `install`
* `npm` or `yarn` `run dev`  - will launch your default browser `http://localhost:8080` and live reload is enabled as you change  source files
* `npm` or `yarn` `run prod` - will bundle everything move move into dist (all minified)

If you have question feel free to reach out to me.
~happy coding


