export default class Instance{
    static _map:{[key:string]:any}={};
    static Get<T>(name:string,bean:T):T{
        if(!this._map[name]){
            this._map[name]=bean;
        }
        return this._map[name]
    }
}
