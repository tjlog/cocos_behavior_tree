import TNodeBase, { B_T_STATUS } from "../base/TNodeBase";
export default class ActionBase extends TNodeBase {
    protected _cb:()=>B_T_STATUS=null;

    protected _bean:any=null;
    init(cb:()=>B_T_STATUS,bean:any){
        this._cb=cb;
        this._bean=bean;
    }


    isInit():boolean{
        let b=true;
        if(!this._cb||!this._bean){
            b=false; 
        }
        return b;
    }


    tick():B_T_STATUS{
        if(!this.isInit()){
            console.log("init() no peform value no init");
            return B_T_STATUS.FAILD;
        }
        if(!this.isRunning()){
            let stu=this._cb.call(this._bean);
            this.modifyStatus(stu)
        }    
        return this._status;
    }
}
