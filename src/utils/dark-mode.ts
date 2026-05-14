export type DarkModeControllerOptions = {
    onChange: (isDark: boolean) => void
    getProp: () => boolean | undefined
}

export class DarkModeController {
    private readonly mediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    private readonly options: DarkModeControllerOptions

    public constructor(options: DarkModeControllerOptions) {
        this.options = options
        this.onMediaChange = this.onMediaChange.bind(this)
    }

    public connect(): void {
        this.mediaQuery.addEventListener('change', this.onMediaChange)
        this.update()
    }

    public disconnect(): void {
        this.mediaQuery.removeEventListener('change', this.onMediaChange)
    }

    public update(): void {
        const prop = this.options.getProp()
        this.options.onChange(prop === undefined ? this.mediaQuery.matches : prop)
    }

    private onMediaChange(event: MediaQueryListEvent): void {
        if (this.options.getProp() === undefined) {
            this.options.onChange(event.matches)
        }
    }
}
