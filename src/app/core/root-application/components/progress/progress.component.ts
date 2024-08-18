import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core'

@Component({
  selector: 'component-progress',
  standalone: true,
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgressComponent {
  @Input() min!: number
  @Input() max!: number
  @Input() value!: number
}
