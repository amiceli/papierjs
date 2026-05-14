import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-tab',
    styleUrl: 'p-tab.scss',
    shadow: true,
})
export class PTab {
    @Prop()
    title: string
    @Prop({
        mutable: true,
    })
    selected?: boolean = false
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
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--selected': this.selected,
                        'is--dark': this.isDark,
                    }}
                >
                    <slot />
                </div>
            </Host>
        )
    }
}
