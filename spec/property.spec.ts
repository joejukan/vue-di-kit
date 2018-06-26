import {Prop, p, Property} from "../lib";

describe(`property tests`, () => {
    it(`p function assigns a string constructor correctly`, ()=>{
        let text = p(String);
        expect(text instanceof Property).toBeTruthy(`the p function did not create an property class object`);
        expect(typeof text['type'] === 'function').toBeTruthy(`the property type is not a constructor`);
        expect(text['type'].name === 'String').toBeTruthy(`the property class did not assign a string type correctly`);
    });

    it(`p function assigns a string value correctly`, ()=>{
        let text = p("John Doe");
        expect(<any>text instanceof Property).toBeTruthy(`the p function did not create an property class object`);
        expect(typeof text['type'] === 'function').toBeTruthy(`the property type is not a constructor`);
        expect(text['type'].name === 'String').toBeTruthy(`the property class did not assign a string type correctly`);
        expect(typeof text['default'] === 'function').toBeTruthy(``);
        expect(text['default']() === "John Doe").toBeTruthy(``);
    });

    it(`prop decorator assigns a number properly`, ()=>{
        let target = { name: 'John Doe', age: 32}
        Prop(Number)(target, 'age');
        let desc = Object.getOwnPropertyDescriptor(target, 'age');

        expect(desc.configurable).toBeTruthy(`number descriptor is not configurable`);
        expect(desc.enumerable).toBeTruthy(`number descriptor is not enumerable`);
        expect(desc.writable).toBeTruthy(`number descriptor is not writable`);
        expect(desc.value instanceof Property).toBeTruthy(`descriptor value was not set to a property class object`);

        let property:Property = desc.value;
        expect(typeof property.type === 'function').toBeTruthy(`number property type is not a constructor`);
        expect(property.type.name === 'Number').toBeTruthy(`the property is not a number constructor`);
        expect(property.default() === 32).toBeTruthy(`the property default value was not properly set`);
    });
});