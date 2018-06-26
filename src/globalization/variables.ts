import Vue, {VueConstructor, ComponentOptions} from "vue";
import {RouterOptions} from "../abstraction";

export var class_components: {[key: string]: VueConstructor} = {};
export var components: {[key: string]: VueConstructor} = {};
export var routes: Array<RouterOptions> = [];
