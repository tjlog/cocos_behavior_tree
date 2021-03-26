/**
 * 用具节点之间数据的分享
 */
export default class BlackBoard {
    private _baseMemory=null;
    private _treeMomory=null;
    constructor(){
        this._baseMemory={}
        this._treeMomory={};
    }
}
