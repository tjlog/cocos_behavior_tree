/**
 * Action 模板
 */
import T1 from "../../t1/T1";
import TNodeBase, { B_T_STATUS } from "./TNodeBase";
export default class ActionTeample extends TNodeBase{
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
