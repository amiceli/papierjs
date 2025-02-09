import { Component, Prop, h } from '@stencil/core'

type ProgressBarColor =
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'muted'
    | 'primary'

@Component({
    tag: 'p-progress-bar',
    styleUrl: 'progress-bar.scss',
    shadow: true,
})
export class ProgressBar {
    @Prop()
    type?: ProgressBarColor = 'primary'
    @Prop()
    value?: number = 0
    @Prop()
    striped?: boolean = false
    @Prop()
    dark?: boolean = false

    public getClass(): string {
        const types = [
            'secondary',
            'success',
            'warning',
            'danger',
            'muted',
            'primary',
        ]
        let cssClass = `bar w-${this.value}`

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
