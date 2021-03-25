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

    isRunning():boolean{
        return this.juideStatus(B_T_STATUS.RUNNING)
    }

    isSuccess(){
        return this.juideStatus(B_T_STATUS.SUCCESS)
    }


    isFaild(){
        return this.juideStatus(B_T_STATUS.FAILD);
    }

    juideStatus(mb:B_T_STATUS){
        let b=false;
        if(this._status==mb)
        return b;
    }

    protected modifyStatus(status:B_T_STATUS){
        this._status=status;
    }

}