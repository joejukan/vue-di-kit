import Vue, { ComponentOptions, VNode, WatchOptions, CreateElement, VNodeChildrenArrayContents, PropOptions } from "vue";
import { VueRouter } from "vue-router/types/router";
import { Route } from "vue-router";
export class VueClass<V extends Vue> implements Vue {
    $router: VueRouter;
    $route: Route;
    $el: HTMLElement;
    $options: ComponentOptions<Vue, object | ((this: Vue) => object), { [key: string]: (this: Vue, ...args: any[]) => any; }, { [key: string]: any; }, string[] | { [x: string]: PropOptions<any> | (() => any) | (new (...args: any[]) => any) | ((() => any) | (new (...args: any[]) => any))[]; }>;
    $parent: Vue;
    $root: Vue;
    $children: Vue[];
    $refs: { [key: string]: Vue | Element | Vue[] | Element[]; };
    $slots: { [key: string]: VNode[]; };
    $scopedSlots: { [key: string]: (props: any) => string | VNodeChildrenArrayContents; };
    $isServer: boolean;
    $data: Record<string, any>;
    $props: Record<string, any>;
    $ssrContext: any;
    $vnode: VNode;
    $attrs: Record<string, string>;
    $listeners: Record<string, Function | Function[]>;
    $mount(elementOrSelector?: string | Element, hydrating?: boolean): this {
        throw new Error("Method not implemented.");
    }
    $forceUpdate(): void {
        throw new Error("Method not implemented.");
    }
    $destroy(): void {
        throw new Error("Method not implemented.");
    }
    $set: { <T>(object: object, key: string, value: T): T; <T>(array: T[], key: number, value: T): T; };
    $delete: { (object: object, key: string): void; <T>(array: T[], key: number): void; };
    $watch(expOrFn: string, callback: (this: this, n: any, o: any) => void, options?: WatchOptions): () => void;
    $watch<T>(expOrFn: (this: this) => T, callback: (this: this, n: T, o: T) => void, options?: WatchOptions): () => void;
    $watch(...args): () => void {
        throw new Error("Method not implemented.");
    }
    $on(event: string | string[], callback: Function): this {
        throw new Error("Method not implemented.");
    }
    $once(event: string, callback: Function): this {
        throw new Error("Method not implemented.");
    }
    $off(event?: string | string[], callback?: Function): this {
        throw new Error("Method not implemented.");
    }
    $emit(event: string, ...args: any[]): this {
        throw new Error("Method not implemented.");
    }
    $nextTick(callback: (this: this) => void): void;
    $nextTick(): Promise<void>;
    $nextTick(callback?: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    $createElement: CreateElement;
}
