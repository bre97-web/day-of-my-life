import type { Routes } from "@angular/router"
import { WelcomeComponent } from "./pages/welcome/welcome.component"

export const welcomeRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    }
]
