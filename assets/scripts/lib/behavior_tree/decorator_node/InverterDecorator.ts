import { B_T_STATUS } from "../base/TNodeBase";
import DecoratorBase from "./DecoratorBase";
export default class InverterDecorator extends DecoratorBase {
    tick():B_T_STATUS{
        if(this.isInit){
            console.log("init method  set value error");
            return B_T_STATUS.FAILD;
        }
        this.modifyStatus(this._task.tick());
        return this.statusInver();
    }
}
