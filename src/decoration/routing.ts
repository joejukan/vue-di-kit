import Vue from "vue";
import {RoutingOptions} from "../abstraction";
import {routes} from "../globalization";
import { VueConstructor } from "vue";
import { RouteConfig } from "vue-router";
import { Argumenter } from "@joejukan/argumenter";
export function Routing(options: RoutingOptions)
export function Routing(path: string);
export function Routing(paths: Array<string>);
export function Routing(...args){
    let argue = new Argumenter(args);
    let options: RoutingOptions = argue.object || {};
    let _path = argue.string;
    let _paths = argue.array;

    if(typeof _path === 'string'){
        options.path = _path;
    }

    else if(Array.isArray(_paths)){
        options.paths = _paths;
    }

    return function(ctor: VueConstructor<Vue>){
        options.component = ctor;
        let paths = options.paths;
        delete options.paths;

        if(paths){
            paths.forEach( path => {
                let route:RouteConfig = Object.assign({}, <any> options);
                route.path = path;
                routes.push(route);
            });
        }
        else if(options.path){
            let route:RouteConfig = Object.assign({}, <any> options);
            routes.push(route);
        }
        
    }
}