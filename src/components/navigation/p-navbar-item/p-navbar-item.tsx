import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-navbar-item',
    styleUrl: 'p-navbar-item.scss',
    shadow: true,
})
export class PNavbarItem {
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean

    @Prop()
    public href: string = '/'

    @Prop()
    public target?: string

    @Prop()
    public icon?: string

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

    public getClass() {
        return {
            papier: true,
            'with--icon': this.icon !== undefined,
            'is--dark': this.isDark,
        }
    }

    render() {
        return (
            <Host>
                <li class={this.getClass()}>
                    <a href={this.href} target={this.target}>
                        {this.icon && <p-icon color={this.isDark ? 'white' : '#41403e'} icon={this.icon} size={20}></p-icon>}
                        <slot />
                    </a>
                </li>
            </Host>
        )
    }
}
