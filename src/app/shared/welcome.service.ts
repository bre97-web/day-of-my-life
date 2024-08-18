import { Injectable, signal } from "@angular/core"

const LocalStorageName = '_welcome_'

@Injectable({
    providedIn: 'root'
})
export class WelcomeService {
    private readonly _firstTimeJoining

    public get firstTimeJoining() {
        return this._firstTimeJoining
    }

    constructor() {
        this._firstTimeJoining = signal(JSON.parse(localStorage.getItem(LocalStorageName) || 'true') as boolean)
    }

    public saveChange(value: boolean) {
        this._firstTimeJoining.set(value)
        localStorage.setItem(LocalStorageName, value.toString())
    }

}
