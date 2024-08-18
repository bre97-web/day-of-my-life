import { computed, inject } from '@angular/core'
import { MaterialDesignColorSystemService } from '../services/material-design-color-system.service'

export abstract class DarkSwitch {
  private themeService = inject(MaterialDesignColorSystemService)

  public readonly isDark = computed(() => this.themeService.isDark())
  protected handleDarkSwitch(isDark?: boolean) {
    if (typeof isDark === 'undefined') {
      this.themeService.isDark.update(value => !value)
    } else {
      this.themeService.isDark.set(isDark)
    }
  }
}
