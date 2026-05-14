import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import feather from 'feather-icons'
import { DarkModeController } from '@/utils/dark-mode'

/**
 * @slot - accordion content
 */
@Component({
    tag: 'p-accordion',
    styleUrl: 'p-accordion.scss',
    shadow: true,
})
export class PAccordion {
    @Prop()
    title: string
    @Prop({
        mutable: true,
    })
    open: boolean = false
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    dark?: boolean

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

    render() {
        const icon = feather.icons['chevron-down'].toSvg()
        const openIcon = feather.icons['chevron-up'].toSvg()

        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--dark': this.isDark,
                    }}
                >
                    <div class="p-accordion is--block border">
                        <div
                            class="p-accordion__summary"
                            onClick={() => {
                                this.open = !this.open
                            }}
                        >
                            <span>{this.title}</span>
                            <span>
                                <span class="for--icon" innerHTML={this.open ? openIcon : icon} />
                            </span>
                        </div>
                        <div
                            class={{
                                'p-accordion__content': true,
                                'is--open': this.open,
                            }}
                        >
                            <slot />
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
