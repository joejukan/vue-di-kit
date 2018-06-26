import { Computed } from "../classification";

export function Compute();
export function Compute(...args){
    return function(target: any, key: string, desc: PropertyDescriptor){
        if(!desc){
            desc = Object.getOwnPropertyDescriptor(target, key);
        }

        new Computed(desc);
        Object.defineProperty(target, key, desc);
    }
}