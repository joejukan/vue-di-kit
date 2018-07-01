import Vue, {VueConstructor, ComponentOptions} from "vue";
import { RouteConfig } from "vue-router";

export var class_components: {[key: string]: VueConstructor} = {};
export var components: {[key: string]: VueConstructor} = {};
export var routes: Array<RouteConfig> = [];
