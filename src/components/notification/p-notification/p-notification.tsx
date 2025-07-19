import { Component, Element, Event, type EventEmitter, Host, h, Prop } from '@stencil/core'
import feather from 'feather-icons'

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
    public close: EventEmitter<string>

    public getIconName() {
        switch (this.type) {
            case 'primary':
                return feather.icons.info.toSvg()
            case 'warning':
                return feather.icons['alert-triangle'].toSvg()
            case 'danger':
                return feather.icons['alert-circle'].toSvg()
            case 'success':
                return feather.icons['check-circle'].toSvg()
            default:
                return feather.icons.info.toSvg()
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

    render() {
        return (
            <Host>
                <div class="papier">
                    <div class={this.getClassName()}>
                        <div innerHTML={this.getIconName()} />
                        <div innerHTML={this.text} />
                        {this.canclose && (
                            <span
                                onClick={() => {
                                    this.onClose()
                                }}
                                innerHTML={feather.icons.x.toSvg()}
                            />
                        )}
                    </div>
                </div>
            </Host>
        )
    }
}
