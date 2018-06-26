import { Argumenter } from "@joejukan/argumenter";

export function properties(object: Object): Array<string>;
export function properties(object: Object, methods: boolean): Array<string>;
export function properties(...args): Array<string> {
    let argue = new Argumenter(args);
    var props = [];
    let object = argue.object || null;
    let methods = argue.boolean;

    for (; object != null; object = Object.getPrototypeOf(object)) {
        if(object === Object.prototype){
            for(let key in object){
                if(pass(object[key], methods))
                    props.push(key);
            }
        }
        else{
            var op = Object.getOwnPropertyNames(object);
            for (var i=0; i<op.length; i++){
                let key = op[i];
                if (props.indexOf(key) == -1 && keyOk(key) )
                    props.push(key);
            }
        }
            
            
    }

    return props.reverse();
}

function keyOk(key: string){
    let regex = /__\w+__/i
    return !regex.test(key);
}
function pass(func: any, methods: boolean){
    if(methods){
        return true;
    }

    else
        return typeof func !== 'function';
}