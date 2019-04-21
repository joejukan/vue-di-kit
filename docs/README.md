# Vue Dependency Injection Kit
[![Build Status](https://api.travis-ci.org/joejukan/vue-di-kit.svg?branch=master)](http://travis-ci.org/joejukan/vue-di-kit)
[![NPM Version](http://img.shields.io/npm/v/vue-di-kit.svg?style=flat)](https://www.npmjs.org/package/vue-di-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-di-kit.svg?style=flat)](https://npmcharts.com/compare/vue-di-kit?minimal=true)

This library allows Vue developers to inject Components, Properties and Routes into the main vue app via decorators.<br/><br/>

|Decorator           |Global Array             |Description                                                      |
|--------------------|-------------------------|-----------------------------------------------------------------|
|**Component**       |**components**           |Used to register components globally to Vue                      |
|**Routing**         |**routes**               |Used to inject routes globally to the main Vue application       |
|**Prop**            |                         |Used to inject properties in to Vue components                   |
|**Compute**         |                         |Used to inject compute properties in to Vue components           |<br/><br/>

**NOTE**<br/>
When using this library for app development, it is recommended to use **Single File Components** (SFC) with the [vue-di-loader](https://www.npmjs.com/package/vue-di-loader).<br/>