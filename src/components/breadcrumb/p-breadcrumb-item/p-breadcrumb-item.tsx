import { Component, Element, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-breadcrumb-item',
    styleUrl: '../p-breadcrumb/p-breadcrumb.scss',
    shadow: true,
})
export class PBreadcrumbItem {
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    dark?: boolean
    @Prop()
    first?: boolean = false
    @Prop()
    link?: string
    @Element()
    public el: HTMLElement

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
        let cssClass = 'papier breadcrumb-item'

        if (this.isDark) {
            cssClass = `${cssClass} is--dark`
        }
        if (this.first) {
            cssClass = `${cssClass} is--first`
        }

        return cssClass
    }

    render() {
        return (
            <span class={this.getParentClass()}>
                {this.link ? (
                    <a href={this.link}>
                        <slot />
                    </a>
                ) : (
                    <slot />
                )}
            </span>
        )
    }
}
