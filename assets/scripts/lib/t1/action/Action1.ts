import TNodeBase, { B_T_STATUS } from "../../behavior_tree/base/TNodeBase";
import T1 from "../T1";
export default class Action1 extends TNodeBase {
    private _bean:T1=null;
    constructor(bean:T1){
        super();
        this._bean=bean;
    }

    tick():B_T_STATUS{
        this._bean.a();
        return B_T_STATUS.SUCCESS;
    }
}
