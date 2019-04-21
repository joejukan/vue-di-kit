# Define a Vue Component
```typescript
import Vue from "vue";
import { Component } from "vue-di-kit";

@Component({name: 'listing'})
export class ListingComponent {
    public list: Array<string> = [];
}
```

<br/>
When using the <a href="https://www.npmjs.com/package/vue-di-loader" target="_blank">vue-di-loader</a> with <a href="https://webpack.js.org/" target="_blank">webpack</a>; the loader will pickup all the <b>.vue</b> SFC and add them as components to the main app.  From there, all the developer needs to do is to specify the component name as a tag in the html.