/**
 * 作用:
 *      “选择器”或“优先级”。
 * 
 * 
 *      规则：
 *          1.在选中第一个子节点之前，节点变为running
 *          2.若一个子节点失败则回退触发(下)一个子节点
 *          3.如果最后一个节点返回失败，所有子节点都停止序列将返回失败
 *          3.如果子节点返回successm,则将停止所有子节点，并返回success    
 *                      
 */
import ControllerBase from "../base/ControllerBase";
export default class FallBackBase extends ControllerBase {
    
}
