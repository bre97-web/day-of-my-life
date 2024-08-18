import type { Routes } from "@angular/router"
import { WelcomeGuard } from "../welcome/welcome.guard"
import { IndexComponent } from "./index.component"
import { HomeComponent } from "./pages/home/home.component"

export const rootApplicationRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        canActivateChild: [WelcomeGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]

