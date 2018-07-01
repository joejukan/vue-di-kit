# Changelog
All notable changes to this project will be documented in this file.<br/>
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).<br/><br/>

## [0.0.4] - 2018-07-01
* update package.json to include `@joejukan/web-kit`. 
* added unit testing for `Property` class.
* updated `Component` decorator to ignore properties that start with an underscore ( `_` ).
* removed local functions `kebab`, `properties` and `singular` in favor of the functions defined in `@joejukan/web-kit`. 
* changed  `RouterOptions` to `RoutingOptions` and extend `RouteConfig` from the `vue-router` `RouterOptions`.

## [0.0.3] - 2018-06-27
* updated `Prop` decorator to make parameter optional.

## [0.0.2] - 2018-06-26
* updated spec files to pull from src instead of lib.
* updated package.json removing verify script and updating preversion script to clean and test.
* added git commit message template.
* updated README.md to some NPM links.

## [0.0.1] - 2018-06-26
* added `RouterOptions` interface.
* added `Computed` class.
* added `Property` class.
* added `VueClass` class.
* added `Component` decorator.
* added `Prop` decorator.
* added `Routing` decorator.
* added `p` function.
* added `kebab` function.
* added `properties` function.
* added `singular` function.
* added `schema` const.
* added `components` array.
* added `routes` array.