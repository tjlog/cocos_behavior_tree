import Eone from "../design/Eone";
import Subject from "../design/Subject";

const { ccclass, property } = cc._decorator;
@ccclass
export default class T1 extends cc.Component {
    start() {
        this.test8();
    }


    /**
     *  from --to   name的执行顺序必须要是当前的地址开始 
     */
    test1() {
        var fsm = new StateMachine({
            init: 'solid',
            transitions: [
                { name: 'melt', from: 'solid', to: 'liquid' },
                { name: 'freeze', from: 'liquid', to: 'solid' },
                { name: 'vaporize', from: 'liquid', to: 'gas' },
                { name: 'condense', from: 'gas', to: 'liquid' }
            ]
        });

        console.log(fsm["state"]); //solid

        fsm["melt"]();   //solid-liquid
        // console.log(fsm.state); //liquid
        // fsm.vaporize(); // liquid -gas
        // console.log(fsm.state); //gas
        // fsm.condense(); //gas -liquid
        // console.log(fsm.state); //liquid

        // fsm.freeze();  //liqiud-solid
        // console.log(fsm.state); //solid
    }


    test2() {
        var fsm = new StateMachine({
            init: 'A',
            transitions: [
                { name: 'step', from: 'A', to: 'B' },
                { name: 'step', from: 'B', to: 'C' },
                { name: 'step', from: 'C', to: 'D' },
                { name: 'reset', from: ['B', 'C', 'D'], to: 'A' }
            ]
        })
        //   console.log(fsm.state);
        //   fsm.step();
        //   console.log(fsm.state);
        //   fsm.reset();
        //   console.log(fsm.state);
        //   fsm.step();
        //   console.log(fsm.state);
        //   fsm.step();
        //   console.log(fsm.state);
        //   fsm.reset();
        //   console.log(fsm.state);
    }



    test3() {
        var fsm = new StateMachine({
            init: 'A',
            transitions: [
                { name: 'step', from: 'A', to: 'B' },
                { name: 'step', from: 'B', to: 'C' },
                { name: 'step', from: 'C', to: 'D' },
                { name: 'reset', from: "*", to: 'A' }
            ]
        })
        //   console.log(fsm.state);
        //   fsm.step();
        //   console.log(fsm.state);
        //   fsm.reset();
        //   console.log(fsm.state);
        //   fsm.step();
        //   console.log(fsm.state);
        //   fsm.step();
        //   console.log(fsm.state);
        //   fsm.reset();
        //   console.log(fsm.state);


        //  console.log(fsm.allStates())

    }


    test4() {
        var fsm = new StateMachine({
            init: 'A',
            transitions: [
                { name: 'step', from: 'A', to: 'B' },
                { name: 'step', from: 'B', to: 'C' },
                { name: 'step', from: 'C', to: 'D' },
                { name: 'goto', from: "*", to: function (s) { return s } }
            ]
        })
        // fsm.goto("C");
        // console.log(fsm.state);
    }




    test5() {
        var fsm = new StateMachine({
            init: 'A',
            transitions: [
                { name: 'step', from: 'A', to: 'B' }
            ],
            data: {
                color: 'red',
                nameStr: "刘鑫"
            },
            methods: {
                describe: function () {
                    console.log('I am ' + this.color);
                },
                liuxin: function () {
                    console.log("name: " + this.nameStr);
                }
            }
        });

        //   fsm.state;      // 'A'
        //   fsm.color;      // 'red'
        //   fsm.describe(); // 'I am red'


        // console.log(fsm.nameStr);
        // fsm.liuxin();  
    }


    test6() {
        var FSM = StateMachine.factory({
            init: 'A',
            transitions: [
                { name: 'step', from: 'A', to: 'B' }
            ],
            data: function (color) {      //  <-- use a method that can be called for each instance
                return {
                    color: color
                }
            },
            methods: {
                describe: function () {
                    console.log('I am ' + this.color);
                }
            }
        });

        var a = new FSM('red'),
            b = new FSM('blue');

        a.state; // 'A'
        b.state; // 'A'

        a.color; // 'red'
        b.color; // 'blue'

        a.describe(); // 'I am red'
        b.describe(); // 'I am blue'
    }



    //事件
    test7() {
        var fsm = new StateMachine({
            init: 'A',
            transitions: [
                { name: 'step', from: 'A', to: 'B',dot:{"falg":1} },
                { name: 'step', from: 'B', to: 'C',dot:{"falg":2} },
                { name: 'step', from: 'C', to: 'D' ,dot:{"falg":3}},
                { name: 'goto', from: "*", to: function (s) { return s } }
            ],
            plugins: [
                new StateMachineHistory()     //  <-- plugin enabled here
            ]
        })
      console.log( StateMachineVisualize(fsm,{ name: 'liuxin', orientation: 'horizontal' }));


    //    fsm.observe("onBeforeTransition",function(fift:LiftCycle,p1,p2){
    //       console.log(fift.transition)
    //       console.log(fift.from)
    //       console.log(fift.to)
    //       console.log(p1);
    //       console.log(p2)
    //    })
    //    fsm.observe("onBeforeTransition",function(fift:LiftCycle,p1,p2){
    //     console.log(fift.transition)
    //     console.log(fift.from)
    //     console.log(fift.to)
    //     console.log(p1);
    //     console.log(p2)
    //  })

        // fsm["step"](1,2);
        // fsm["goto"]("D",3);
        
        fsm["step"]();
        console.log(fsm.history);
        fsm["step"]();
        console.log(fsm.history);
        fsm["step"]();
        console.log(fsm.history);
       
        fsm["goto"]("A");
        console.log(fsm.history);
        fsm.historyBack();
        console.log(fsm.history);
        fsm.historyForward();
        console.log(fsm.history);
    }


    test8(){
        let subject=new Subject();
        let e1=new Eone(subject);
        let e2=new Eone(subject);
        let e3=new Eone(subject);


        subject.setStates(100);
    }
}
