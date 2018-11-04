import Vue, { VueConstructor } from 'vue';
import { VueClass } from '.';
import { getVue } from '../function';
import * as api from 'vue-hot-reload-api';
declare let module: { hot: {accept: () => void }};
const V: VueConstructor<Vue> = getVue();
export class HMRClass {

    public constructor(
        public id: string, 
        public type: VueConstructor<Vue> | VueClass<Vue> | Vue
    ) {

    }

    public get compatible(): boolean {
        return api.compatible;
    }

    public install(vue: VueConstructor<Vue>) {
        api.install(vue);
    }
    public isRecorded(id: string): boolean {
        return api.isRecorded(id);
    }

    public createRecord(id: string, type: VueConstructor<Vue> | VueClass<Vue> | Vue): void {
        api.createRecord(id, type);
    }

    public reload(id: string, type: VueConstructor<Vue> | VueClass<Vue> | Vue): void {
        api.reload(id, type);
    }

    public hot() {
        if(module.hot) {
            this.install(V);
            if(this.compatible) {
                module.hot.accept();
                if(!this.isRecorded(this.id)) {
                    this.createRecord(this.id, this.type);
                }
                else {
                    this.reload(this.id, this.type);
                }
            }
            else {
                console.error('the vue-hot-reload-api is not compatible with this version of Vue')
            }
        }
    }
}