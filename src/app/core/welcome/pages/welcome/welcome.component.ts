import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core'
import { Router } from '@angular/router'
import { MyLifeService } from '../../../../shared/my-life.service'
import { WelcomeService } from '../../../../shared/welcome.service'

@Component({
  selector: 'page-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {
  private welcomeService = inject(WelcomeService)
  private myLifeService = inject(MyLifeService)
  private router = inject(Router)

  protected birthday = model('')
  protected deathday = model('')

  protected done() {
    this.welcomeService.saveChange(false)
    this.myLifeService.updateBirthday(this.birthday())
    this.myLifeService.updateDeathday(this.deathday())
    this.router.navigateByUrl('')
  }
}
