import { BehaviorSubject, Observable, of } from "rxjs";

export class Store<T> {
    private _state: BehaviorSubject<T | undefined>;

    constructor(initialState?: T) {
        this._state = new BehaviorSubject(initialState);
    }

    public get state$(): Observable<T | undefined> {
        return this._state.asObservable();
    }

    public get state(): T | undefined {
        return this._state.value;
    }

    public setState(nextState: T): void {
        this._state.next(nextState);
    }
}
