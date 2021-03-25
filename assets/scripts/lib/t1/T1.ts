import TreeFactory from "../behavior_tree/core/TreeFactory";

const {ccclass, property} = cc._decorator;
@ccclass
export default class T1 extends cc.Component {
    onLoad(){
        let factory=TreeFactory.Ins;
        let tree=factory.tree(null);
        tree.run();
    }
}
