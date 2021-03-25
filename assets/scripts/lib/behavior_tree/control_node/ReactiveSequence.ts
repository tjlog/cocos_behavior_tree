import { B_T_STATUS } from "../base/TNodeBase";
import SequenceBase from "./SequenceBase";


/**
 *  顺序执行
 *     当我们执行完返回 success和fail再次执行会从第一个开始执行
 *     返回running 我们再次执行会接着上一次的结果进行执行 
 *  
 */
export default class ReactiveSequence extends SequenceBase {

   
    tick():B_T_STATUS{
        if(!this.isRunning()){ //状态为running时就会接着刚才的进行执行
            this.index=0;//每次执行重第一个开始
        }
        if(this.isInit()){
            return B_T_STATUS.FAILD;
        }
        this.modifyStatus(B_T_STATUS.RUNNING);//修改当前的代码为执行状态
        const self=this;
        this._squence();
        return this._status;
    }


    protected _squence(){
        while(this.index<=this._tasks.length-1){
            let child_s=this._tasks[this.index].tick();
            if(child_s==B_T_STATUS.SUCCESS){
                this.index++;
            }else{
                this.modifyStatus(child_s);
            }
        }
        if(this.index>this._tasks.length-1){
            this.modifyStatus(B_T_STATUS.SUCCESS);
        }
    }


}
