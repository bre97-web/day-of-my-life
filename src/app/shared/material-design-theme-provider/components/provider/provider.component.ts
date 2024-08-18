import { Component, computed, ElementRef, HostListener, inject, type OnDestroy } from '@angular/core'
import { BreakpointService } from '../../services/breakpoint.service'
import { MaterialDesignColorSystemService } from '../../services/material-design-color-system.service'

@Component({
  selector: 'material-design-theme-provider',
  standalone: false,
  templateUrl: './provider.component.html',
})
export class ProviderComponent implements OnDestroy {
  private themeService = inject(MaterialDesignColorSystemService)
  private elementRef = inject(ElementRef)

  constructor() {
    this.themeService.configurationObservable.subscribe(() => {
      this.generateStyles()
    })
  }

  protected generateStyles() {
    const rootElement = this.elementRef.nativeElement as DocumentFragment
    const styleText = this.themeService.generateStyles()

    let styleElement = rootElement.querySelector('#material-design-theme-tokens')
    if (styleElement === null) {
      styleElement = document.createElement('style')
      styleElement.setAttribute('id', 'material-design-theme-tokens')
      rootElement.appendChild(styleElement)
    }
    styleElement.textContent = styleText
  }

  private breakpoint = inject(BreakpointService)
  protected currentScreenSizeName = computed(() => this.breakpoint.currentScreenSizeName())
  ngOnDestroy(): void {
    this.breakpoint.handleDestroy()
  }

  protected currentScreenSize = 'auto'
  @HostListener('window:resize', ['$event'])
  private handleWindowResize(e: Event) {
    this.currentScreenSize = `${(e.target as Window).innerWidth}px`
  }
}
