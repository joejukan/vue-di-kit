import {Prop, p, Property} from "../src";

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
        expect(text['default'] === "John Doe").toBeTruthy(`the property did not assign the default value correctly`);
    });
});