import { type AfterViewInit, Component, ElementRef, inject, Input } from '@angular/core'

@Component({
  selector: 'component-block-grid',
  standalone: true,
  templateUrl: './block-grid.component.html',
  styleUrl: './block-grid.component.css'
})
export class BlockGridComponent implements AfterViewInit {
  @Input() counts: number = 0
  @Input() filledCounts: number = 0
  /**
   * @unit px
   */
  @Input() blockSize: number = 48

  protected elementRef = inject(ElementRef)

  ngAfterViewInit(): void {
    const ul = (this.elementRef.nativeElement as HTMLElement).querySelector('&>ul.block-grid') as HTMLUListElement
    console.log(ul)

    for (let index = 0; index < this.counts; index++) {
      ul.appendChild(this.createBlock(index < this.filledCounts))
    }
  }

  private createBlock(isFilled: boolean = false, size: number = this.blockSize) {
    const block = document.createElement('li')
    block.classList.add('block-unit')
    if (isFilled) {
      block.classList.add('filled')
    } else {
      block.classList.add('unfilled')
    }
    block.style.setProperty('width', `${this.blockSize}px`)
    block.style.setProperty('height', `${this.blockSize}px`)
    return block
  }
}
