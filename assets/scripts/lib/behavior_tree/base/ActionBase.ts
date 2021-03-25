import TNodeBase from "./TNodeBase";

export default class ActionBase<T extends cc.Component> extends TNodeBase{
    private _bean:T=null;
    constructor(bean:T){
        super();
        this._bean=bean;
    }

    
}
