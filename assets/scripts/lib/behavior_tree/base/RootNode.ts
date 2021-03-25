import Sequence from "../sequence_node/Sequence";
import TNodeBase, { B_T_STATUS } from "./TNodeBase";
export default class RootNode extends TNodeBase {
        run(array:Array<TNodeBase>):B_T_STATUS{
            let sequece= new Sequence();
            sequece.init(array);
            this._status=sequece.tick();
            return this._status;
        }
}
