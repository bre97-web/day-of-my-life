import { computed, Injectable, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { Hct, hexFromArgb, SchemeContent, SchemeExpressive, SchemeFidelity, SchemeFruitSalad, SchemeMonochrome, SchemeNeutral, SchemeRainbow, SchemeTonalSpot, SchemeVibrant } from '@material/material-color-utilities'
import { EMaterialContrastLevel, type TMaterialContrastLevel } from '../types/contrast-level.type'
import type { THctRaw } from '../types/hct-raw.type'
import { EMaterialVariant, type TMaterialVariant } from '../types/variant.type'
import { MaterialColors } from '../utils/material-color-mapping'
import { Strings } from '../utils/strings'

const LocalStorageItem = '_material-theme-configurations_'

@Injectable({
  providedIn: 'root'
})
export class MaterialDesignColorSystemService {
  public readonly variant = signal<TMaterialVariant>(EMaterialVariant.TonalSpot)
  public readonly isDark = signal<boolean>(false)
  public readonly contrastLevel = signal<TMaterialContrastLevel>(EMaterialContrastLevel.Default)
  public readonly hctRaw = signal<THctRaw>({
    hue: 140,
    chroma: 40,
    tone: 50,
  })
  public readonly hct = computed(() => {
    const { chroma, hue, tone } = this.hctRaw()
    return Hct.from(hue, chroma, tone)
  })

  public readonly configuration = computed(() => ({
    hct: this.hct(),
    hctRaw: this.hctRaw(),
    isDark: this.isDark(),
    contrastLevel: this.contrastLevel(),
    variant: this.variant()
  }))

  public readonly configurationObservable = toObservable(this.configuration)

  constructor() {
    const configurationObjFromLocalStorage = JSON.parse(localStorage.getItem(LocalStorageItem) || JSON.stringify(this.configuration())) as {
      hct: Hct
      hctRaw: THctRaw
      isDark: boolean
      contrastLevel: TMaterialContrastLevel
      variant: TMaterialVariant
    }
    this.variant.set(configurationObjFromLocalStorage.variant)
    this.isDark.set(configurationObjFromLocalStorage.isDark)
    this.contrastLevel.set(configurationObjFromLocalStorage.contrastLevel)
    this.hctRaw.set(configurationObjFromLocalStorage.hctRaw)

    this.configurationObservable.subscribe((value) => {
      localStorage.setItem(LocalStorageItem, JSON.stringify(value))
    })
  }

  public generateStyles() {
    let scheme = null
    switch (this.variant()) {
      case EMaterialVariant.Monochrome:
        scheme = new SchemeMonochrome(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.Neutral:
        scheme = new SchemeNeutral(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.TonalSpot:
        scheme = new SchemeTonalSpot(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.Vibrant:
        scheme = new SchemeVibrant(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.Expressive:
        scheme = new SchemeExpressive(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.Fidelity:
        scheme = new SchemeFidelity(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.Content:
        scheme = new SchemeContent(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.Rainbow:
        scheme = new SchemeRainbow(this.hct(), this.isDark(), this.contrastLevel())
        break
      case EMaterialVariant.FruitSalad:
        scheme = new SchemeFruitSalad(this.hct(), this.isDark(), this.contrastLevel())
        break
      default:
        scheme = new SchemeContent(this.hct(), this.isDark(), this.contrastLevel())
    }

    const theme: Record<string, string> = {}
    for (const [key, value] of Object.entries(MaterialColors)) {
      theme[key] = hexFromArgb(value.getArgb(scheme))
    }

    return `.md-tokens {${Object
      .entries(theme)
      .map(e => `--md-sys-color-${Strings.toKebabCase(e[0])}: ${e[1]};`)
      .reduce((l, c) => l + c)}}`
  }
}







