import { Component, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

type ProgressBarColor = 'secondary' | 'success' | 'warning' | 'danger' | 'muted' | 'primary'

@Component({
    tag: 'p-progress-bar',
    styleUrl: 'p-progress-bar.scss',
    shadow: true,
})
export class PProgressBar {
    @Prop()
    public type?: ProgressBarColor = 'primary'
    @Prop()
    public value?: number = 0
    @Prop()
    public striped?: boolean = false
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean
    @Prop()
    public auto?: number

    @State()
    public interval?: number

    @State()
    private isDark: boolean = false

    private darkController = new DarkModeController({
        onChange: (v) => {
            this.isDark = v
        },
        getProp: () => this.dark,
    })

    public componentWillLoad() {
        this.darkController.connect()
    }

    @Watch('dark')
    public onDarkChange() {
        this.darkController.update()
    }

    public componentDidLoad() {
        if (this.auto) {
            this.interval = window.setInterval(() => {
                this.value = this.value >= 100 ? 0 : this.value + 10
            }, this.auto)
        }
    }

    public disconnectedCallback() {
        this.darkController.disconnect()
        window.clearInterval(this.interval)
    }

    public getClass(): string {
        const types = [
            'secondary',
            'success',
            'warning',
            'danger',
            'muted',
            'primary',
        ]
        const value = this.value < 0 ? 0 : this.value > 100 ? 100 : this.value

        let cssClass = `bar w-${value}`

        if (!types.includes(this.type)) {
            cssClass = `${cssClass} primary`
        } else {
            cssClass = `${cssClass} ${this.type}`
        }

        if (this.striped) {
            cssClass = `${cssClass} striped`
        }

        return cssClass
    }

    public getParentClass() {
        let cssClass = 'papier is--block'

        if (this.isDark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    public render() {
        return (
            <div class={this.getParentClass()}>
                <div class="progress">
                    <div class={this.getClass()}>
                        <slot />
                    </div>
                </div>
            </div>
        )
    }
}
