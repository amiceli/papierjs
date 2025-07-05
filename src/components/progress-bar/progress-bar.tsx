import { Component, Prop, State, h } from '@stencil/core'

type ProgressBarColor = 'secondary' | 'success' | 'warning' | 'danger' | 'muted' | 'primary'

@Component({
    tag: 'p-progress-bar',
    styleUrl: 'progress-bar.scss',
    shadow: true,
})
export class PProgressBar {
    @Prop()
    type?: ProgressBarColor = 'primary'
    @Prop()
    value?: number = 0
    @Prop()
    striped?: boolean = false
    @Prop()
    dark?: boolean = false
    @Prop()
    auto?: number

    @State()
    interval?: number

    public componentDidLoad() {
        if (this.auto) {
            this.interval = window.setInterval(() => {
                this.value = this.value >= 100 ? 0 : this.value + 10
            }, this.auto)
        }
    }

    public disconnectedCallback() {
        window.clearInterval(this.interval)
    }

    public getClass(): string {
        const types = ['secondary', 'success', 'warning', 'danger', 'muted', 'primary']
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

        if (this.dark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    render() {
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
