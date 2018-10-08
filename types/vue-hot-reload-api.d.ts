declare module "vue-hot-reload-api" {
    import Vue, { VueConstructor } from "vue";
    export const compatible: boolean;
    export function install(vue: VueConstructor<Vue>): void;
    export function createRecord(id: string, options: any): void;
    export function rerender(id: string, options: any): void;
    export function reload(id: string, options: any): void;
    export function isRecorded(id: string): boolean;
}