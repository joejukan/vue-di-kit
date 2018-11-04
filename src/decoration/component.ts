import "reflect-metadata";
import { class_components, components } from "../globalization";
import { Argumenter } from "@joejukan/argumenter";
import Vue, { ComponentOptions, VueConstructor } from "vue";
import { Computed, Property } from "../classification";
import { singular, kebab, properties } from "@joejukan/web-kit";
import { getVue } from '../function';

const V = getVue();

export function Component();
export function Component(options?: ComponentOptions<Vue>);
export function Component(...args) {
    var argue = new Argumenter(args);
    var options = <ComponentOptions<Vue>> argue.object || {};
    
    return function(type: {new (): Vue}){
        process(options, type);
        let _super = findSuper(type.prototype);
        let extended = _super.extend(options);
        class_components[singular(type)] = extended;
        if(!options.name){
            options.name = singular(type);
        }
        components[options.name] = extended;
        return extended;
     }
}

function findSuper(proto: Object): VueConstructor<Vue> {
    let parent = Object.getPrototypeOf(proto)

    if(parent instanceof V)
        return parent.constructor;

    return V;
    
}

function isProp(key: string): boolean{
    if(key.startsWith('$'))
        return false;

    if(key.startsWith('_'))
        return false;

    if(key === 'constructor' || key === '__proto__')
        return false;
    
    if(isLCM(key))
        return false;
    

    return true;
}

function isLCM(key: string): boolean {
    // screen for lifecycle methods
    if(key.match(/created|destroyed|mounted|updated|activated|deactivated/i))
    return true;

    else if(key.match(/beforeCreate|beforeDestroy|beforeMount|beforeUpdate/i))
        return true;

    // screen for navigation guard methods
    else if(key.match(/beforeRouteEnter|beforeRouteLeave|beforeRouteUpdate/i))
        return true;

    return false;
}

function process(options: ComponentOptions<Vue>, type: new() => Vue){
    if(!options.name)
        options.name = kebab(type);
    
    let vue = new type();
    let keys = properties(vue, true);
    let data = {};
    let props = options.props = {};
    options.computed = {};
    let watch = options.watch = {};
    options.methods = {};

    for(let i = 0; i < keys.length; i++){
        let key = keys[i];

        let value = vue[key];
        if(isProp(key)){
            // TODO: find a more efficient way to get the value.
            if(Reflect.hasMetadata(key, type.prototype)){
                let property: Property = Reflect.getMetadata(key, type.prototype);
                property.setValue(value);
                options.props[key] = property;
            }
            else if(value instanceof Property){
                options.props[key] = value;
            }
            else if(typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'){
                data[key] = value;
            }

            else if (Array.isArray(value)){
                data[key] = value;
            }

            else if(typeof value === 'function'){
                options.methods[key] = value;
                vue[key] = function(){}
            }


            else if(value instanceof Computed){
                options.computed[key] = value;
            }

            else if(typeof value === 'object')
                data[key] = value;
        }
        else if (typeof value === 'function'){
            if(isLCM(key))
                options[key] = value;
        }

        options.data = function() {
            let result = {};
            Object.assign(result, data);
            return result;
        }
    }

}