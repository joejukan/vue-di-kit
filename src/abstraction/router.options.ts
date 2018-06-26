import Vue from "vue";
export interface RouterOptions {
    path?: string;
    paths?: Array<string>;
    name?: string;
    component?: typeof Vue;
}