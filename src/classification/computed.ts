export class Computed{
    public get: {()}
    public set: {(value)}

    public constructor(desc: PropertyDescriptor){
        this.get = desc.get;
        this.set = desc.set;
        delete desc.get;
        delete desc.set;
        desc.writable = true;
        desc.enumerable = true;
        desc.configurable = true;
        desc.value = this;
    }
}