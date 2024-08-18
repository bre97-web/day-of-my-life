import { inject, Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, type CanActivateChild, type GuardResult, type MaybeAsync, Router, RouterStateSnapshot } from "@angular/router"
import { WelcomeService } from "../../shared/welcome.service"

@Injectable({
    providedIn: 'root'
})
export class WelcomeGuard implements CanActivateChild {

    private router = inject(Router)
    private welcomeService = inject(WelcomeService)

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if (!this.welcomeService.firstTimeJoining()) {
            return true
        }
        this.router.navigateByUrl('welcome')
        return false
    }
}
