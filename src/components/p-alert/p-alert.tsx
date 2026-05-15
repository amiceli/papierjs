import { Component, Event, type EventEmitter, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

type AlertColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

/**
 * @Slot - alert content
 */
@Component({
    tag: 'p-alert',
    styleUrl: 'p-alert.scss',
    shadow: true,
})
export class PAlert {
    @Prop()
    public type?: AlertColor = 'primary'
    /** Show close icon */
    @Prop()
    public closable?: boolean = false
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean

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

    public disconnectedCallback() {
        this.darkController.disconnect()
    }

    @Watch('dark')
    public onDarkChange() {
        this.darkController.update()
    }

    @Event({
        eventName: 'close',
    })
    public close: EventEmitter

    public getClass(): string {
        const types = [
            'primary',
            'secondary',
            'success',
            'warning',
            'danger',
        ]
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

        if (this.isDark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    public closeAlert() {
        this.close.emit(null)
    }

    public render() {
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
