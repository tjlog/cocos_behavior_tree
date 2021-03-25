import TNodeBase, { B_T_STATUS } from "../behavior_tree/base/TNodeBase";
export default class SyncActionNode extends TNodeBase {
    private _name:string=null;
    constructor(name:string){
        super();
        this._name=name;
    }

    tick():B_T_STATUS{
        console.log(this._name);
        return B_T_STATUS.SUCCESS;
    }
}
