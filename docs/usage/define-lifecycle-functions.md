# Define Lifecycle Functions
```typescript
import Vue from "vue";
import { Route } from 'vue-router';
import { Component } from "vue-di-kit";

@Component({ name: 'person' })
export class Person {
  
  public created() {

  }

  public destroyed() {

  }

  public mounted() {

  }

  public activated() {

  }

  public deactivated() {

  }

  public beforeCreate() {

  }

  public beforeDestroy() {

  }

  public beforeMount() {

  }

  public beforeUpdate() {

  }

  public beforeRouteEnter(to: Route, from: Route, next: Function) {

  }

  public beforeRouteLeave(to: Route, from: Route, next: Function) {

  }

  public beforeRouteUpdate(to: Route, from: Route, next: Function) {

  }

}
```

<br/>
The Vue component's <b>lifecycle</b> functions are just functions named after the lifecycle.  These functions will be called during their corresponding lifecycle.  Developers must make sure that their regular <b>methods</b> are not named after any reserved lifecycle function..