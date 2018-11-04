import * as window from "window-or-global";
import Vue, {VueConstructor} from 'vue';
export function getVue(): VueConstructor<Vue> {
    return (window && window['Vue'] ? window['Vue'] : Vue);
}