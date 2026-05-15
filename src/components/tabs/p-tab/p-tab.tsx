import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-tab',
    styleUrl: 'p-tab.scss',
    shadow: true,
})
export class PTab {
    @Prop()
    public title: string
    @Prop({
        mutable: true,
    })
    public selected?: boolean = false
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

    public render() {
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
