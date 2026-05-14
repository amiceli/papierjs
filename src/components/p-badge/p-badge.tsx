import { Component, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

type BadgeColor = 'secondary' | 'success' | 'warning' | 'danger'

@Component({
    tag: 'p-badge',
    styleUrl: 'p-badge.scss',
    shadow: true,
})
export class PBadge {
    @Prop()
    type?: BadgeColor = undefined
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

    public getParentClass() {
        let cssClass = `papier`

        if (this.isDark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    public getClass() {
        return `badge ${this.type || ''}`
    }

    render() {
        return (
            <span class={this.getParentClass()}>
                <span class={this.getClass()}>
                    <slot />
                </span>
            </span>
        )
    }
}
