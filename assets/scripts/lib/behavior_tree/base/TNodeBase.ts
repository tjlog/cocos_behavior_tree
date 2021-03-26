import BlackBoard from "../core/BlackBoard";
import Instance from "./Instance";

export enum B_T_STATUS{
    FAILD,
    SUCCESS,
    RUNNING,
}
export default class TNodeBase{

    private _blackBoard: BlackBoard = null;
    public get blackBoard(): BlackBoard {
        return this._blackBoard;
    }
    constructor(blackBorad:BlackBoard){
        this._blackBoard=blackBorad;
    }

    /**
     * 唯一id
     */
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    //注意：_status 初始化为suucess
    protected _status:B_T_STATUS;
    tick():B_T_STATUS{
        this.modifyStatus(B_T_STATUS.SUCCESS);
        return this._status;
    }

    /**
     * 异步tick
     * @returns 
     */
    asyncTick():Promise<B_T_STATUS>{
        return new Promise((res,rej)=>{
            res(B_T_STATUS.SUCCESS);
        });
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
        this.close(this.id);
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


    /**
     * 是否打开门
     * @param id 
     * @returns 
     */
    isOpen(id:string):boolean{

        return this.blackBoard.getBaseMemory(id).open;
    }

    /**
     * 开门
     * @param id 
     */
    open(id:string){
        this.blackBoard.getBaseMemory(id).open=true; 
    }
    /**
     * 关门
     * @param id 
     */
    close(id:string){
        this.blackBoard.getBaseMemory(id).open=false;
    }
}
