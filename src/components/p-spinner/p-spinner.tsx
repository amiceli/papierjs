import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-spinner',
    styleUrl: 'p-spinner.scss',
    shadow: true,
})
export class PSpinner {
    @Prop()
    public large: boolean = false

    @Prop()
    public color?: string

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

    componentWillLoad() {
        this.darkController.connect()
    }

    disconnectedCallback() {
        this.darkController.disconnect()
    }

    @Watch('dark')
    onDarkChange() {
        this.darkController.update()
    }

    public getStyle() {
        return {
            backgroundColor: this.color || 'currentColor',
        }
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'p-spinner': true,
                        papier: true,
                        'is--large': this.large,
                        'is--dark': this.isDark,
                    }}
                >
                    <div class="border border-primary" style={this.getStyle()}></div>
                    <div class="border border-primary" style={this.getStyle()}></div>
                    <div class="border border-primary" style={this.getStyle()}></div>
                </div>
            </Host>
        )
    }
}
