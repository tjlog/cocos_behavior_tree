import Event_ from "./Event_";

export default class Subject {

    private _events:Array<Event_>=[];
    setStates(num:number){
        this._change(num);    
    }


    private _change(num:number){
        this._events.forEach(e=>{
            e.emit(num);
        })
    }
    addEvent(event:Event_){
        this._events.push(event);
    }
    
}
