import { Injectable, signal } from "@angular/core"

const LocalStorageName = '_my-life_'

@Injectable({
    providedIn: 'root',
})
export class MyLifeService {
    private readonly birthday = signal('')
    private readonly deathday = signal('')

    constructor() {
        const json = JSON.parse(localStorage.getItem(LocalStorageName) || JSON.stringify({
            birthday: '',
            deathday: '',
        }))
        this.birthday.set(json.birthday)
        this.deathday.set(json.deathday)
    }

    public updateBirthday(dateString: string) {
        this.birthday.set(dateString)
        this.saveChanges()
    }
    public updateDeathday(dateString: string) {
        this.deathday.set(dateString)
        this.saveChanges()
    }

    private saveChanges() {
        localStorage.setItem(LocalStorageName, JSON.stringify({
            birthday: this.birthday(),
            deathday: this.deathday()
        }))
    }

    public getSurvivalDays() {
        const now = Date.now()
        const from = Date.parse(this.birthday())
        return this.getDaysBetween(from, now)
    }
    public getLifetimeDays() {
        return this.getDaysBetween(Date.parse(this.birthday()), Date.parse(this.deathday())) + 1
    }

    private getDaysBetween(date1: number, date2: number) {
        const oneDay = 1000 * 60 * 60 * 24
        return Math.round(Math.abs((date1 - date2) / oneDay))
    }
}
