import TNodeBase from "../base/TNodeBase";

/**
 * 用具节点之间数据的分享
 */
export default class BlackBoard {
    private _baseMemory:{[key:string]:any}=null;
    private _treeMomory:{[key:string]:TreeData}=null;
    constructor(){
        this._baseMemory={}
        this._treeMomory={};
    }

    private _getTreeMemory(id:string):TreeData{
        if(!this._treeMomory[id]){
            this._treeMomory[id]=new TreeData();
        }
        return this._treeMomory[id];
    }
    
}



class TreeData{
    nodeMemory:any;
    openNodes:Array<TNodeBase>;
    traversalDepth:number;
    traversalCycle:number;
    constructor(){
        this.nodeMemory={};
        this.openNodes=[];
        this.traversalDepth=0;
        this.traversalCycle=0;
    }
}
