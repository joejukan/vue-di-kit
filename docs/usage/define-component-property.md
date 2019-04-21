# Define a Vue Component Property
```typescript
import Vue from "vue";
import { Component, Prop } from "vue-di-kit";

@Component({name: 'doc'})
export class DocumentComponent {
  @Prop()
  public title:string = 'Hello World';
}
```


The default value can also be set in the prop decorator.<br/>
```typescript
@Prop({default: 'Hello World'})
public title:string
```

## NOTES:
**01. Component Property Nomenclature**<br/>
When defining properties or data fields, ensure that they do not start with a dollar sign ( **$** ) or and underscore ( **_** ).&nbsp;
Otherwise, the property or data field will be ignored.<br/><br/>