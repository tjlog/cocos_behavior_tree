
import { B_T_STATUS } from "../base/TNodeBase";
import DecoratorBase from "./DecoratorBase";

export default class ForceSuccessDecorator extends DecoratorBase {
    
    tick():B_T_STATUS{
        if(this.isInit){
            console.log("init method  set value error");
            return B_T_STATUS.FAILD;
        }
        this.modifyStatus(this._task.tick());
        return this._statusForceSuccss(); 
    }

    private _statusForceSuccss():B_T_STATUS{
        if(this.isRunning()){
            return this._status;
        }

        return B_T_STATUS.SUCCESS;
    }
}
