import Instance from "./Instance";

export enum B_T_STATUS{
    FAILD,
    SUCCESS,
    RUNNING
}
export default class TNodeBase{
    //注意：_status 初始化为suucess
    protected _status:B_T_STATUS;
    tick():B_T_STATUS{
        this.modifyStatus(B_T_STATUS.SUCCESS);
        return this._status;
    }

    protected isRunning():boolean{
        return this.juideStatus(this._status,B_T_STATUS.RUNNING)
    }

    protected isSuccess(){
        return this.juideStatus(this._status,B_T_STATUS.SUCCESS)
    }


    protected isFaild(){
        return this.juideStatus(this._status,B_T_STATUS.FAILD);
    }

    protected juideStatus(nowStatus:B_T_STATUS,mb:B_T_STATUS){
        let b=false;
        if(nowStatus==mb) b=true;
        return b;
    }

    protected modifyStatus(status:B_T_STATUS){
        this._status=status;
    }

    /**
     * 节点停止功能
     */
    stop(){

    }

    protected statusInver():B_T_STATUS{
        if(this.isRunning()){
            return B_T_STATUS.RUNNING;
        }

        if(this.isSuccess()){
            return B_T_STATUS.FAILD;
        }

        return B_T_STATUS.SUCCESS;
    }
}
