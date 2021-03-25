import TNodeBase from "./TNodeBase";
export default class ControllerBase extends TNodeBase {
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
    
    /**
     * 停止所有字节点
     */
    protected _haltAllChildren(){

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


}
