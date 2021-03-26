import { com } from "../../com/com";
import { B_T_STATUS } from "../base/TNodeBase";
import BlackBoard from "./BlackBoard";
import Root from "./Root";
export default class Tree{
    private _bb:BlackBoard=null;
    constructor(blackBoard:BlackBoard){
        this._bb=blackBoard;
        this._roots={};
    }

    private _roots:{[key:string]:Root}=null;
    load(key:string,json:any){
        
    }


    tick(key:string):B_T_STATUS{
        let root=this._roots[key];
        if(com.isNull(root)){
            console.log("root no have");
            return B_T_STATUS.FAILD;
        }
        return root.tick();
    }

    
}
