import { Component, Element, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

@Component({
    tag: 'p-navbar',
    styleUrl: 'p-navbar.scss',
    shadow: true,
})
export class PNavbar {
    @Element()
    public el: HTMLElement

    @Prop()
    public split: boolean = false

    @Prop()
    public fixed: boolean = false

    /**
     * Force dark or light mode. If not provided, the component follows
     * the browser preference (`prefers-color-scheme`).
     */
    @Prop()
    public dark?: boolean

    @Prop()
    public rootLink: string = '/'

    @Prop()
    public rootTitle: string = ''

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

    public getClass() {
        return {
            border: true,
            fixed: this.fixed === true,
            'split-nav': this.split === true,
            'is--dark': this.isDark,
        }
    }

    private syncItems() {
        const items = Array.from(this.el.getElementsByTagName('p-navbar-item'))

        for (const item of items) {
            if (this.isDark) {
                item.setAttribute('dark', 'true')
            } else {
                item.removeAttribute('dark')
            }
        }
    }

    public componentDidLoad() {
        const items = Array.from(this.el.getElementsByTagName('p-navbar-item'))

        for (const item of items) {
            item.style.marginLeft = '10px'
        }

        this.syncItems()

        items.at(0)?.setAttribute('first', 'true')
    }

    render() {
        return (
            <Host>
                <div class="papier">
                    <nav class={this.getClass()}>
                        <div class="nav-brand">
                            <h3>
                                <a href={this.rootLink} slot="main">
                                    {this.rootTitle}
                                </a>
                            </h3>
                        </div>
                        <div class="collapsible">
                            <input id="collapsible1" name="collapsible1" type="checkbox" />
                            <label htmlFor="collapsible1">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </label>
                            <div class="collapsible-body">
                                <ul class="inline">
                                    <slot></slot>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </Host>
        )
    }
}
