import { PropOptions } from "vue";
import { Argumenter } from "@joejukan/argumenter";
export class Property implements PropOptions{
    public type: {new()}
    public required: boolean = false;
    public default: any;
    public constructor(type: new () => any);
    public constructor(options: PropOptions);
    public constructor(...args){
        let argue = new Argumenter(args);
        this.type = argue.function;
        let options = <PropOptions> argue.object;

        Object.assign(this, options);
        this.setValue(this.default);
    }

    public setValue(value){
        if(!/null|undefined/.test(typeof value)){
            this.default = value;
            if(!this.type){
                if(typeof value === 'string')
                    this.type = String;
                else if (typeof value === 'number')
                    this.type = Number;
                else if (typeof value === 'boolean')
                    this.type = Boolean;
                else if (Array.isArray(value))
                    this.type = Array;
                else if (typeof value === 'object')
                    this.type = value['constructor'];
            }
        }
    }
}