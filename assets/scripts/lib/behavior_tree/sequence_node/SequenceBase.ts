import ControllerBase from "../base/ControllerBase";
import TNodeBase, { B_T_STATUS } from "../base/TNodeBase";
export default class SequenceBase extends ControllerBase {
    tick():B_T_STATUS{
        this._status=B_T_STATUS.RUNNING;
        return this._status;
    }

}
