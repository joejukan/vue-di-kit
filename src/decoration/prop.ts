import { PropOptions } from "vue";
import { Argumenter } from "@joejukan/argumenter";
import { Property } from "../classification";

export function Prop();
export function Prop(type: new () => any);
export function Prop(options: PropOptions);
export function Prop(...args) {
    let argue = new Argumenter(args);
    let type = argue.function;
    let options: PropOptions = argue.object || <PropOptions>{ type: type };
    return function (target: any, key: string) {
        let desc = <PropertyDescriptor>{value: target[key]};
        new Property(options, desc);
        Object.defineProperty(target, key, desc)
    }
}

export function p<T>(type: new () => T): T;
export function p<T>(value: T): T;
export function p<T>(type: new () => T, options: PropOptions): T;
export function p<T>(value: T, options: PropOptions): T;
export function p(...args){
    let argue = new Argumenter(args);
    let type = argue.function;
    let value = undefined;
    
    if(!type){
        value = argue.string || argue.number || argue.boolean || argue.object;
        switch(typeof value){
            case 'string': type = String; break;
            case 'number': type = Number; break;
            case 'boolean': type = Boolean; break;
            default: type = value['constructor']; break;
        }
    }

    let options:PropOptions = argue.object || {};
    options.type = type;

    let desc = <PropertyDescriptor> {value: value || new type()}

    return new Property(options, desc);
}