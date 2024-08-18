import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { DarkModeSwitchComponent } from './components/dark-mode-switch/dark-mode-switch.component'
import { DarkModeOutlinedIconButtonComponent } from './components/dark-mode/dark-mode.component'
import { ProviderComponent } from './components/provider/provider.component'

@NgModule({
  declarations: [
    ProviderComponent,
  ],
  imports: [
    DarkModeSwitchComponent,
    DarkModeOutlinedIconButtonComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ProviderComponent,
    DarkModeSwitchComponent,
    DarkModeOutlinedIconButtonComponent,
  ],
})
export class MaterialDesignThemeModule { }
