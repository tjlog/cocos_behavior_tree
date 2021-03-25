import { B_T_STATUS } from "../base/TNodeBase";
import SequenceBase from "./SequenceBase";
export default class SequenceStar extends SequenceBase {
    tick():B_T_STATUS{
        if(!this.isRunning()){
            this.index=0;
        }
        if(this.isInit()){
            return B_T_STATUS.FAILD;
        }
        this.modifyStatus(B_T_STATUS.RUNNING);//修改当前的代码为执行状态
        return this._status;
    }

    
    protected _squence(){

    }
}
