import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { DarkSwitch } from '../../utils/dark-switch.class'

@Component({
  selector: 'material-design-theme-dark-mode',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DarkModeOutlinedIconButtonComponent extends DarkSwitch {
  public toggle() {
    this.handleDarkSwitch()
  }
}
