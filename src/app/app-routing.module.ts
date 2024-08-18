import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'root-application',
    loadChildren: () => import('./core/root-application/root-application.module').then(m => m.RootApplicationModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./core/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: '',
    redirectTo: 'root-application/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
