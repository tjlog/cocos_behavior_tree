import { B_T_STATUS } from "../base/TNodeBase";
import FallBackBase from "./FallBackBase";

/**
 * 选择一个success 
 *          running 一次判断这个条件 直到改变
 *          success 重置 成功
 *          faild  失败  执行下一个  当执行到最后一个重置右重第一个开始执行  
 *              
 */
export default class FallBack extends FallBackBase {

    tick(): B_T_STATUS {
        if(!this.isInit()){
            return B_T_STATUS.FAILD;
        }
        if(this.isSuccess()||this.isRunning()){
            this.index=0;
        }
        this.modifyStatus(B_T_STATUS.RUNNING);
        this._squence();
        return this._status;
    }


    private _squence(){
        while(this.index<=this._tasks.length-1){
            let child_s=this._tasks[this.index].tick();
            if(this.juideStatus(child_s,B_T_STATUS.RUNNING)){
                this.modifyStatus(B_T_STATUS.RUNNING);
                break;
            }else if(this.juideStatus(child_s,B_T_STATUS.FAILD)){
                this.index++;
            }else{
                this.modifyStatus(B_T_STATUS.SUCCESS);
                break;
            }
        }

        if(this.index==this._tasks.length-1&&this.isFaild()){
            //最后一个并且是失败的
            this.index=0;//重置索引
        }else{
            if(this.isSuccess()){
                this._haltAllChildren();
            }
        }
    }
}
