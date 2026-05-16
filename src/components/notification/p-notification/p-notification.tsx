import { Component, Element, Event, type EventEmitter, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-notification',
    styleUrl: 'p-notification.scss',
    shadow: true,
})
export class PNotification {
    @Element()
    public el: HTMLElement

    @Prop()
    public type?: string = 'info'

    @Prop()
    public text = ''

    @Prop()
    public canclose = false

    @Prop()
    public timestamp = ''

    @Event({
        eventName: 'close',
    })
    public close!: EventEmitter<string>

    public getIconName(): string {
        switch (this.type) {
            case 'primary':
                return 'info-box'
            case 'warning':
                return 'warning-diamond'
            case 'danger':
                return 'circle-slash'
            case 'success':
                return 'checkbox-on'
            default:
                return 'info-box'
        }
    }

    public getClassName() {
        const cssClass = {
            alert: true,
            'can--close': this.canclose,
        }
        const type = [
            'primary',
            'secondary',
            'success',
            'warning',
            'danger',
        ].find((v) => v === this.type)
        cssClass[`alert-${type || 'primary'}`] = true

        return cssClass
    }

    private onClose() {
        console.debug('on close baby')
        this.close.emit(this.timestamp)
    }

    public render() {
        return (
            <Host>
                <div class="papier">
                    <div class={this.getClassName()}>
                        <p-icon icon={this.getIconName()} />
                        <div innerHTML={this.text} />
                        {this.canclose && (
                            <p-icon
                                icon="delete"
                                onClick={() => {
                                    this.onClose()
                                }}
                            ></p-icon>
                        )}
                    </div>
                </div>
            </Host>
        )
    }
}
