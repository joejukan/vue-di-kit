# Define a Compute Property
```typescript
import Vue from "vue";
import { Component, Prop, Compute } from "vue-di-kit";

@Component({ name: 'person' })
export class Person {
  @Prop()
  public firstName:string = 'Jane';

  @Prop()
  public lastName:string = 'Doe';

  @Compute()
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
```