import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DarkSwitch } from '../../utils/dark-switch.class';

@Component({
  selector: 'material-design-theme-dark-mode-switch',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-switch.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DarkModeSwitchComponent extends DarkSwitch {

}
