import {Compute, Computed} from "../src";

let name = "John Doe";
let age = 39;
let married = true;

function person(): {name: string, age: number, married: boolean} {
    let result = {};
    [{key: 'name', value: name}, {key: 'age', value: age}, {key: 'married', value: married}].forEach(field => {
        let _key = `_${field.key}`;

        Object.defineProperty(result, field.key, {
            enumerable: true,
            configurable: true,
            get: function() { return this[_key]; },
            set: function(value) { this[_key] = value; }
        });
    });

    return <any> result;
}


describe(`compute tests`, () => {
    it(`compute decorator assigns a string properly`, () => {
        let target = person();
        let desc = Object.getOwnPropertyDescriptor(target, 'name');
       
        Compute()(target, 'name', desc);
        expect(target.name).toBeDefined(`the property was not defined`);

        let computed:Computed = <any> target.name;
        expect(computed instanceof Computed).toBeTruthy(`the property was not set to a computed class object`);

        computed.set(name)
        expect(computed.get() === name).toBeTruthy(`the computed get method was not setup properly`);

        computed.set("Jane Doe");
        expect(computed.get() === "Jane Doe").toBeTruthy(`the computed set method was not setup properly`);

    });

    it(`compute decorator assigns a number properly`, () => {
        let target = person();
        let desc = Object.getOwnPropertyDescriptor(target, 'age');
       
        Compute()(target, 'age', desc);
        expect(target.age).toBeDefined(`the property was not defined`);

        let computed:Computed = <any> target.age;
        expect(computed instanceof Computed).toBeTruthy(`the property was not set to a computed class object`);

        computed.set(age)
        expect(computed.get() === age).toBeTruthy(`the computed get method was not setup properly`);

        computed.set(45);
        expect(computed.get() === 45).toBeTruthy(`the computed set method was not setup properly`);
    });

    it(`compute decorator assigns a boolean properly`, () => {
        let target = person();
        let desc = Object.getOwnPropertyDescriptor(target, 'married');
       
        Compute()(target, 'married', desc);
        expect(target.married).toBeDefined(`the property was not defined`);

        let computed:Computed = <any> target.married;
        expect(computed instanceof Computed).toBeTruthy(`the property was not set to a computed class object`);

        computed.set(married)
        expect(computed.get() === married).toBeTruthy(`the computed get method was not setup properly`);

        computed.set(false);
        expect(computed.get() === false).toBeTruthy(`the computed set method was not setup properly`);
    });
});