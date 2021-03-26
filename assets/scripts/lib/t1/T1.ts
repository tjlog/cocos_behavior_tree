import TreeFactory from "../behavior_tree/core/TreeFactory";
const {ccclass, property} = cc._decorator;
@ccclass
export default class T1 extends cc.Component {
    onLoad(){
        console.log("开始")
        // let factory=TreeFactory.Ins;
        // let ac1=new Action1(this);
        // let ac2=new Action2(this);
        // let ac3=new Action3(this);
        // let root=new RootNode();
        // let tree=factory.tree(root);
        // tree.run([ac1,ac2,ac3]);
    }

    a(){
        console.log("a")
    }

    b(){
        console.log("b")
    }


    c(){
        console.log("c")
    }
}
