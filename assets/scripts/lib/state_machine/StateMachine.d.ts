declare class StateMachine {
    constructor(data:any);
    /**
     * var Matter = StateMachine.factory({     //  <-- the factory is constructed here
        init: 'solid',
        transitions: [
            { name: 'melt',     from: 'solid',  to: 'liquid' },
            { name: 'freeze',   from: 'liquid', to: 'solid'  },
            { name: 'vaporize', from: 'liquid', to: 'gas'    },
            { name: 'condense', from: 'gas',    to: 'liquid' }
        ]
    });

  var a = new Matter(),    //  <-- instances are constructed here
      b = new Matter(),
      c = new Matter();
     * @param data 
     */
    declare static factory(data:any,data2?:any); 


    /**
     * 
     * @param eventStr 
     * 
     * lifecycle event 
     * onBeforeTransition  transition 之前执行
     * onLeaveState 离开任何一个状态执行
     * onTransition  transition期间
     * onEnterState 进入一个状态
     * onAfterTransition  transition 之后
     * 
     * //普通事件
     * 
     * onBefore<TRANSITION> 执行在Transition之前
     * 
     * 
     * 
     * 
     *  onInvalidTransition 执行无效的transition 会触发这个事件
     * 
     * 
     * @param cb 
     */
    observe(eventStr:string,cb:(data?:LiftCycle,...args)=>void);
    observe(data:any);
    observe(eventStr:string,cb:(data?:LiftCycle,...args)=>Promise<void>);


    /**
     * 判断该事件是否是一个有效的事件
     * @param transition 
     */
    can(transition:string):boolean;


    /**
     * 历史
     */
    history:Array<string>;
    /**
     * 清空所有历史
     */
    clearHistory();


    /**
     * 根据历史倒退 (超过会报错)
     */
    historyBack();

    /**
     * 历史前进(超过会报错)
     */
    historyForward();

    /**
     * 是否允许历史倒退
     */
    canHistoryBack():boolean;

    /**
     * 是否允许历史前进
     */
    canHistoryForward():boolean;
}

declare class LiftCycle{
    transition:string;//transition name 值
    from:string
    to:string;
}

declare class StateMachineHistory{
    constructor(data?:{name:string});//name 是影响StateMachine 的字段 默认 history
}


/**
 * 可视化
 * 
 * 
 * 状态机可视化工具
 * @param fsm 
 * @param data 
 */
declare function StateMachineVisualize(fsm:any,data?:any);

