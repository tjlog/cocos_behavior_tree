const {ccclass, property} = cc._decorator;
@ccclass
export default class T1 extends cc.Component {
    onLoad(){
       this.test3()
    }


    /**
     *  from --to   name的执行顺序必须要是当前的地址开始 
     */
    test1(){
        var fsm = new StateMachine({
            init: 'solid',
            transitions: [
              { name: 'melt',     from: 'solid',  to: 'liquid' },
              { name: 'freeze',   from: 'liquid', to: 'solid'  },
              { name: 'vaporize', from: 'liquid', to: 'gas'    },
              { name: 'condense', from: 'gas',    to: 'liquid' }
            ]
          });
 
        console.log(fsm.state); //solid

        fsm.melt();   //solid-liquid
        console.log(fsm.state); //liquid
        fsm.vaporize(); // liquid -gas
        console.log(fsm.state); //gas
        fsm.condense(); //gas -liquid
        console.log(fsm.state); //liquid
        
        fsm.freeze();  //liqiud-solid
        console.log(fsm.state); //solid
    }


    test2(){
        var fsm = new StateMachine({
            init: 'A',
            transitions: [
              { name: 'step',  from: 'A',               to: 'B' },
              { name: 'step',  from: 'B',               to: 'C' },
              { name: 'step',  from: 'C',               to: 'D' },
              { name: 'reset', from: [ 'B', 'C', 'D' ], to: 'A' }
            ]
          })
          console.log(fsm.state);
          fsm.step();
          console.log(fsm.state);
          fsm.reset();
          console.log(fsm.state);
          fsm.step();
          console.log(fsm.state);
          fsm.step();
          console.log(fsm.state);
          fsm.reset();
          console.log(fsm.state);
    }



    test3(){
        var fsm = new StateMachine({
            init: 'A',
            transitions: [
              { name: 'step',  from: 'A',               to: 'B' },
              { name: 'step',  from: 'B',               to: 'C' },
              { name: 'step',  from: 'C',               to: 'D' },
              { name: 'reset', from: "*", to: 'A' }
            ]
          })
          console.log(fsm.state);
          fsm.step();
          console.log(fsm.state);
          fsm.reset();
          console.log(fsm.state);
          fsm.step();
          console.log(fsm.state);
          fsm.step();
          console.log(fsm.state);
          fsm.reset();
          console.log(fsm.state);

    }
    
    
}
