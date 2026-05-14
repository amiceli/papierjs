import { Component, Element, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-breadcrumb',
    styleUrl: 'p-breadcrumb.scss',
    shadow: true,
})
export class PBreadcrumb {
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    dark?: boolean

    @Element()
    public el: HTMLElement

    @State()
    private isDark: boolean = false

    private darkController = new DarkModeController({
        onChange: (v) => {
            this.isDark = v
            this.syncItems()
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
        let cssClass = 'papier is--block breadcrumb'

        if (this.isDark) {
            cssClass = `${cssClass} is--dark`
        }

        return cssClass
    }

    private syncItems() {
        const items = Array.from(this.el.getElementsByTagName('p-breadcrumb-item'))

        for (const item of items) {
            if (this.isDark) {
                item.setAttribute('dark', 'true')
            } else {
                item.removeAttribute('dark')
            }
        }
    }

    public componentDidLoad() {
        const items = Array.from(this.el.getElementsByTagName('p-breadcrumb-item'))

        this.syncItems()

        items.at(0)?.setAttribute('first', 'true')
    }

    render() {
        return (
            <div class={this.getParentClass()}>
                <div class="border">
                    <slot />
                </div>
            </div>
        )
    }
}
