import TNodeBase, { B_T_STATUS } from "../base/TNodeBase";
import SequenceBase from "./SequenceBase";

/**
 * 顺序执行
 *      每次执行都会从第一个执行
 *      注意： 当时running状态的时候会继续以前的地方开始执行
 *      faild 会重头开始执行
 */

export default class Sequence  extends SequenceBase {

  

    tick():B_T_STATUS{
        if(this.isOpen(this.id)) return this._status;
        if(!this.isRunning()){
            this.index=0;
        }
        if(this.isInit()){
            return B_T_STATUS.FAILD;
        }
        this.modifyStatus(B_T_STATUS.RUNNING);//修改当前的代码为执行状态
        this.open(this.id);
        this._squence();
        this.close(this.id);
        return this._status;
    }






    /**
     * 
     * @param data succ fail 是各自状态的的逻辑
     */
     protected _squence(){
        //按顺序执行
        while(this.index<=this._tasks.length-1){
            if(this.flagTaskIndexs.indexOf(this.index)!=-1) {
                this.index++;
                continue;
            };
            let child_s=this._tasks[this.index].tick();
            if(this.juideStatus(child_s,B_T_STATUS.SUCCESS)){
                this.flagTaskIndexs.push(this.index);
                this.index++;
            }else{
                this.modifyStatus(child_s);
                break;
            }
        }
        if(this.index>this._tasks.length-1){
            this.modifyStatus(B_T_STATUS.SUCCESS);
        }

        if(this.isSuccess()||this.isFaild()){
            this.clearFlagTaskIndex();
            this._haltAllChildren();
        }
    }

    
}
