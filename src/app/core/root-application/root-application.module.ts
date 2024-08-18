import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MaterialDesignThemeModule } from "../../shared/material-design-theme-provider/material-design-theme.module"
import { BlockGridComponent } from "./components/block-grid/block-grid.component"
import { ProgressComponent } from './components/progress/progress.component'
import { IndexComponent } from './index.component'
import { HomeComponent } from './pages/home/home.component'
import { rootApplicationRoutes } from './root-application.routes'



@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(rootApplicationRoutes),
    BlockGridComponent,
    ProgressComponent,
    ProgressComponent,
    MaterialDesignThemeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RootApplicationModule { }
