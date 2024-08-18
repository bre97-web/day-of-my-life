import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatStepperModule } from '@angular/material/stepper'
import { RouterModule } from '@angular/router'
import { WelcomeComponent } from './pages/welcome/welcome.component'
import { welcomeRoutes } from './welcome.routes'


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    RouterModule.forChild(welcomeRoutes),
    MatDatepickerModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    WelcomeComponent
  ],
  providers: [
    provideNativeDateAdapter(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule { }
