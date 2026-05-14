import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-sidebar-item',
    styleUrl: 'p-sidebar-item.scss',
    shadow: true,
})
export class PSidebarItem {
    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean

    @Prop()
    public active?: boolean = false

    @Prop()
    public url?: string

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

    private getComponentClasses() {
        return {
            papier: true,
            'is--dark': this.isDark,
            'is--active': this.active ?? false,
        }
    }

    private handleClick() {
        if (this.url) {
            window.open(this.url, this.target ?? '_self')
        }
    }

    render() {
        return (
            <Host>
                <div class={this.getComponentClasses()} onClick={() => this.handleClick()}>
                    {this.icon && <p-icon icon={this.icon} />}
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
