# Changelog
All notable changes to this project will be documented in this file.<br/>
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).<br/><br/>

## [0.1.0] - [FEATURE] Upgraded to Vue 2.6 and Documentation on Docute - 2018-04-21
* upgraded [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) dependency to version `0.1.13`.
* upgraded [vue](https://www.npmjs.com/package/vue) dependency to version `2.6.10`.
* upgraded [vue-router](https://www.npmjs.com/package/vue-router) dependency to version `3.0.6`.
* upgraded [vue-hot-reload-api](https://www.npmjs.com/package/vue-hot-reload-api) dependency to version `2.3.3`.
* modified `p()` function to extract the `Function` contructor from an assigned function value.
* modified the `$scopedSlots` field signature to a key pair of `NormalizedScopedSlot` value.
* added `docs/` folder with [docute](https://www.npmjs.com/package/docute) capability.

## [0.0.6] - [FEATURE] Introduced Support for Scenarios where the Vue Module is Externalized in Webpack - 2018-11-04
* update package.json to include [window-or-global](https://www.npmjs.com/package/window-or-global).
* update package.json to include [@types/node](https://www.npmjs.com/package/@types/node).
* added `getVue()` function to get `Vue` object if present in browser `window` object; otherwise provide the `Vue` object from the `vue` module.
* updated the `@Component` decorator's `findSuper()` function to use the `Vue` object produced by the `getVue()` function.
* updated the `HMRClass` `hot()` method to pasth the `Vue` object produced by the `getVue()` function into the `install()` function call.

## [0.0.5] - [FEATURE] Introduced Hot Module Replacement Class - 2018-10-08
* update package.json to include [vue-hot-reload-api](https://www.npmjs.com/package/vue-hot-reload-api).
* added HMRClass as a wrap around the [vue-hot-reload-api](https://www.npmjs.com/package/vue-hot-reload-api).

## [0.0.4] - [FEATURE] Introduced Web Kit Module - 2018-07-01
* update package.json to include `@joejukan/web-kit`. 
* added unit testing for `Property` class.
* updated `Component` decorator to ignore properties that start with an underscore ( `_` ).
* removed local functions `kebab`, `properties` and `singular` in favor of the functions defined in `@joejukan/web-kit`. 
* changed  `RouterOptions` to `RoutingOptions` and extend `RouteConfig` from the `vue-router` `RouterOptions`.
* updated unit test for `Property` class.
* updated `p` function to assign default value.

## [0.0.3] - [IMPROVE] Modified Prop Decorator to Support a Non-Factory Use Case - 2018-06-27
* updated `Prop` decorator to make parameter optional.

## [0.0.2] - [IMPROVE] Updated Jasmine Testing to Pull from Typescript instead of Javascript - 2018-06-26
* updated spec files to pull from src instead of lib.
* updated package.json removing verify script and updating preversion script to clean and test.
* added git commit message template.
* updated README.md to some NPM links.

## [0.0.1] - [FEATURE] Introduced Decorators for Vue Components - 2018-06-26
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