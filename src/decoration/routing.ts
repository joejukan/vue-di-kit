import Vue from "vue";
import {RouterOptions} from "../abstraction";
import {routes} from "../globalization";
import { VueConstructor } from "vue";
export function Routing(options: RouterOptions){
    return function(ctor: VueConstructor<Vue>){
        options.component = ctor;
        let paths = options.paths;
        delete options.paths;

        if(paths){
            paths.forEach( path => {
                let route = Object.assign({}, options);
                route.path = path;
                routes.push(route);
            });
        }
        else{
            routes.push(options);
        }
        
    }
}