# Define a Route Entry
``` typescript
import Vue from "vue";
import { Component, Routing } from "vue-di-kit";

@Routing({ path: '/listener' })
@Component({ name: 'listing' })
export class ListingComponent {
    public list: Array<string> = [];
}
```
<br/>
The <b>@Routing</b>  decorator is can be used to set a route entry in the <a href="https://router.vuejs.org/">vue-router</a> for a specifc vue component.
&nbsp; When using the <a href="https://www.npmjs.com/package/vue-di-loader" target="_blank">vue-di-loader</a> with <a href="https://webpack.js.org/" target="_blank">webpack</a>; The loader will add the component, as a route, to the <a href="https://router.vuejs.org/" target="_blank">vue-router</a>.