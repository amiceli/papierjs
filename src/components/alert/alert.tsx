import { Component, Event, type EventEmitter, Prop, h } from '@stencil/core'

type AlertColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

/**
 * @Slot - alert content
 */
@Component({
    tag: 'p-alert',
    styleUrl: 'alert.scss',
    shadow: true,
})
export class PAlert {
    @Prop()
    type?: AlertColor = 'primary'
    /** Show close icon */
    @Prop()
    closable?: boolean = false
    @Prop()
    dark?: boolean = false

    @Event({ eventName: 'close' })
    public close: EventEmitter

    public getClass(): string {
        const types = ['primary', 'secondary', 'success', 'warning', 'danger']
        let cssClass = 'alert'

        if (!types.includes(this.type)) {
            cssClass = `${cssClass} alert-primary`
        } else {
            cssClass = `${cssClass} alert-${this.type}`
        }

        if (this.closable) {
            cssClass = `${cssClass} dismissible`
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

    public closeAlert() {
        this.close.emit(null)
    }

    render() {
        return (
            <div class={this.getParentClass()}>
                <div class={this.getClass()}>
                    <slot />
                    {this.closable && (
                        <span class="btn-close" onClick={() => this.closeAlert()}>
                            X
                        </span>
                    )}
                </div>
            </div>
        )
    }
}
