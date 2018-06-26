# Vue Dependency Injection Kit
[![Build Status](https://api.travis-ci.org/joejukan/vue-di-kit.svg?branch=master)](http://travis-ci.org/joejukan/vue-di-kit)
[![NPM Version](http://img.shields.io/npm/v/@joejukan/vue-di-kit.svg?style=flat)](https://www.npmjs.org/package/vue-di-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/@joejukan/vue-di-kit.svg?style=flat)](https://npmcharts.com/compare/vue-di-kit?minimal=true)

This library allows Vue developers to inject Components, Properties and Routes into the main vue app via decorators.<br/>

|Decorator           |Global Array             |Description                                                      |
|--------------------|-------------------------|-----------------------------------------------------------------|
|**Component**       |**components**           |Used to register components globally to Vue                      |
|**Routing**         |**routes**               |Used to inject routes globally to the main Vue application       |
|**Prop**            |                         |Used to inject properties in to Vue components                   |
|**Compute**         |                         |Used to inject compute properties in to Vue components           |<br/>

**NOTE**<br/>
When using this library for app development, it is recommended to use **Single File Components** (SFC) with the [vue-di-loader](https://www.npmjs.com/package/vue-di-loader).<br/>

## Usage
```typescript
import Vue from "vue";
import {Component, Compute, Prop, Routing} from "vue-di-kit";

@Routing({path: '/busness/listing'})
@Component({name: 'listing'})
export class ListingComponent {
    @Prop()
    public name: string;

    public list: Array<string> = [];

    @Compute()
    public get count() {
        return list.length;
    }
}
```

## Installation
Do the following steps to install **vue-di-kit**:
```
npm install vue-di-kit
```

## Authors
**01)** **Joseph Eniojukan** - [joejukan](https://github.com/joejukan)<br/>

## ChangeLog
[CHANGELOG.md](https://github.com/joejukan/vue-di-kit/blob/master/CHANGELOG.md) file for details

## License
This project is licensed under the ISC License - see the [LICENSE.md](https://github.com/joejukan/vue-di-kit/blob/master/LICENSE.md) file for details

Copyright 2018 Joseph Eniojukan

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.