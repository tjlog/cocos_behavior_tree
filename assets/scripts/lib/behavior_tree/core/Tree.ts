import Instance from "../base/Instance";
import RootNode from "../base/RootNode";
import TNodeBase from "../base/TNodeBase";

export default class Tree{
    private _rootn:RootNode=null;
    constructor(rootn:RootNode){
        this._rootn=rootn;
    }

    run(){
        this._rootn.tick();
    }
}
