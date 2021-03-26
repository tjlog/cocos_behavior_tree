import { B_T_STATUS } from "../base/TNodeBase";
import SequenceBase from "./SequenceBase";

/**
 * 顺序执行
 *          当返回success的时候代表每一个task走执行success
 *          
 * 
 *      当执行faild和running的时候下一次执行会接着上一次的地方开始执行    
 */
export default class SequenceStar extends SequenceBase {
    tick():B_T_STATUS{
        if(this.isOpen(this.id)) return this._status;
        if(this.isSuccess()){
            this.index=0;
        }
        if(this.isInit()){
            return B_T_STATUS.FAILD;
        }
        this.open(this.id);
        this.modifyStatus(B_T_STATUS.RUNNING);//修改当前的代码为执行状态
        this._squence();
        this.close(this.id)
        return this._status;
    }


    protected _squence(){
        while(this.index<=this._tasks.length-1){
            let child_s=this._tasks[this.index].tick();
            if(this.juideStatus(child_s,B_T_STATUS.SUCCESS)){
                this.flagTaskIndexs.push(this.index);
                this.index++;
            }else{
                this.modifyStatus(child_s);
                break;
            }
        }

        if(this.index==this._tasks.length-1){
            this.modifyStatus(B_T_STATUS.SUCCESS);
        }

        if(this.isSuccess()){
            this.clearFlagTaskIndex();
            this._haltAllChildren();
        }
    }
}
