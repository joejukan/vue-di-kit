import Vue from "vue";

export interface RoutingOptions {
    path?: string | Array<string>;
    paths?: Array<string>;
    name?: string;
    component?: typeof Vue;
}