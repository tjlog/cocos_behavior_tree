import TNodeBase from "../base/TNodeBase";

const {ccclass, property} = cc._decorator;
@ccclass
export default class DecoratorBase extends TNodeBase {
    protected _task:TNodeBase=null;
    init(task:TNodeBase){
        this._task=task;
    }

    isInit():boolean{
        let f=this._status?true:false;
        return f;    
    }
}
