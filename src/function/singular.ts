import { Argumenter } from "@joejukan/argumenter";

export function singular(object: Object): string;
export function singular(type: { new (): any }): string;
export function singular(...args){
    let argue = new Argumenter(args);
    let type: {new (): any} = argue.function;
    let object = argue.object;

    if(type)
        return type['name'].toLowerCase();

    if(object){
        type = <any> object['constructor'];
        return type['name'].toLowerCase();
    }
}