import { Injectable, signal } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { BreakpointObserver } from '@angular/cdk/layout';

const MaterialDesignBreakpoints = {
    Compact: '(max-width: 600px)',
    Medium: '(min-width: 600px) and (max-width: 840px)',
    Expanded: '(min-width: 840px) and (max-width: 1200px)',
    Large: '(min-width: 1200px) and (max-width: 1600px)',
    ExtraLarge: '(min-width: 1600px)',
}

@Injectable({
    providedIn: 'root',
})
export class BreakpointService {
    private destroyed = new Subject<void>()
    public readonly currentScreenSizeName = signal<string>('unknown')

    // Create a map to display breakpoint names for demonstration purposes.
    private displayNameMap = new Map([
        [MaterialDesignBreakpoints.Compact, 'compact'],
        [MaterialDesignBreakpoints.Medium, 'medium'],
        [MaterialDesignBreakpoints.Expanded, 'expanded'],
        [MaterialDesignBreakpoints.Large, 'large'],
        [MaterialDesignBreakpoints.ExtraLarge, 'extra-large'],
    ])

    constructor(breakpointObserver: BreakpointObserver) {
        breakpointObserver
            .observe([
                MaterialDesignBreakpoints.Compact,
                MaterialDesignBreakpoints.Medium,
                MaterialDesignBreakpoints.Expanded,
                MaterialDesignBreakpoints.Large,
                MaterialDesignBreakpoints.ExtraLarge,
            ])
            .pipe(takeUntil(this.destroyed))
            .subscribe(result => {

                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query]) {
                        this.currentScreenSizeName.set(this.displayNameMap.get(query) ?? 'unknown')
                    }
                }
            })
    }

    public handleDestroy() {
        this.destroyed.next()
        this.destroyed.complete()
    }
}