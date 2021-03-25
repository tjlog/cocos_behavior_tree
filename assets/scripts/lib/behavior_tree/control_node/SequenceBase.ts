import TNodeBase, { B_T_STATUS } from "../base/TNodeBase";
export default class SequenceBase extends TNodeBase {
    tick():B_T_STATUS{
        this._status=B_T_STATUS.RUNNING;
        return this._status;
    }
    private _index: number = 0;

    protected _tasks:Array<TNodeBase>=null;
    init(task:Array<TNodeBase>){
        this.index=0;//初始化执行索引
        this._tasks=task;
    }
    /**
     *判断初始化方法是否执行
     * @returns 
     */
    isInit():boolean{
        let b=true;
        if(this._tasks||this._tasks.length==0){
            console.log("task value null please call init method");
            b=false;
        }
        return b;
    }



    protected get index(): number {
        return this._index;
    }
    protected set index(value: number) {
        this._index = value;
    }



    private _flagTaskIndexs:Array<number>=[];

    protected get flagTaskIndexs():Array<number>{
        return this._flagTaskIndexs;
    }


    /**
     * 清除标记task的数据
     */
    protected clearFlagTaskIndex(){
        this._flagTaskIndexs=[];
    }


    /**
     * 停止所有子元素
     */
    protected _haltAllChildren(){

    }
    
}
