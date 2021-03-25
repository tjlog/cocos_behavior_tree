/**
 * ReactiveFallback 异步钩子
 * 
 * 
 * 
 * 
 */
import { B_T_STATUS } from "../base/TNodeBase";
import FallBackBase from "./FallBackBase";
export default class ReactiveFallback extends FallBackBase {

    tick(): B_T_STATUS {
        if(!this.isInit()){
            return B_T_STATUS.FAILD;
        }
        this.index=0;
        this.modifyStatus(B_T_STATUS.RUNNING);
        this._squence();
        return this._status;
    }


    private _squence(){
       while(this.index<=this._tasks.length-1){
            let child_s=this._tasks[this.index].tick();
            if(this.juideStatus(child_s,B_T_STATUS.FAILD)){
                this.index++;
                this.modifyStatus(B_T_STATUS.FAILD);
            }else if(this.juideStatus(child_s,B_T_STATUS.SUCCESS)){
                this.modifyStatus(B_T_STATUS.SUCCESS);
                break;
            }else{
                //running
                this.modifyStatus(B_T_STATUS.RUNNING);
                break;
            }
       }
       if(this.isFaild()||this.isSuccess()){
              this._haltAllChildren();  
       }
    }
}
