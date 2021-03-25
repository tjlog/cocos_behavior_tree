import Instance from "../base/Instance";
import RootNode from "../base/RootNode";
import Tree from "./Tree";

export default class TreeFactory extends Instance {
    static get Ins():TreeFactory{
        return this.Get("TreeFactory",new TreeFactory()); 
    }

    tree(nodes:RootNode):Tree{
        return new Tree(nodes);
    }


}
 