import Subject from "./Subject";

export default class Event_ {
    private _subject:Subject=null;
    constructor(sub:Subject){
        this._subject=sub;
        this._subject.addEvent(this);
    }

    emit(...args){
        console.log(args);
    }
}
