import { Component, computed, inject } from '@angular/core'
import { MyLifeService } from '../../../../shared/my-life.service'

@Component({
  selector: 'page-root-application-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private myLifeService = inject(MyLifeService)

  protected survivalDays = this.myLifeService.getSurvivalDays()
  protected lifetimeDays = this.myLifeService.getLifetimeDays()

  protected survivalYears = computed(() => (this.survivalDays / 365))
  protected lifetimeYears = computed(() => (this.lifetimeDays / 365))

  constructor() {
    console.log(this.survivalDays)
  }
}
