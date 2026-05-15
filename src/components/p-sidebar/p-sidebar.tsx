import { Component, Host, h, Prop, State, Watch } from '@stencil/core'
import { DarkModeController } from '@/utils/dark-mode'

export type PSidebarUser = {
    name: string
    email: string
    photo: string
}

@Component({
    tag: 'p-sidebar',
    styleUrl: 'p-sidebar.scss',
    shadow: true,
})
export class PSidebar {
    /**
     * Allow to force dark or lighe mode.
     *
     * By default component follows browser mode
     */
    @Prop()
    public dark?: boolean

    @Prop()
    public logo?: string

    @Prop()
    public title: string = ''

    @Prop()
    public user?: PSidebarUser

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
                        'is--dark': this.isDark,
                    }}
                >
                    <div class="sidebar card">
                        <div class="sidebar__top">
                            {this.logo && <img alt="missing logo" src={this.logo} />}
                            <span>{this.title}</span>
                        </div>
                        <div class="sidebar__menu">
                            <slot></slot>
                        </div>
                        <div class="sidebar__footer">
                            {this.user && (
                                <div class="footer__clickable">
                                    <img alt="something" src={this.user.photo} />
                                    <div>
                                        <b>{this.user.name}</b>
                                        <span>{this.user.email}</span>
                                    </div>
                                </div>
                            )}
                            {this.user && (
                                <div class="footer__actions">
                                    <slot name="actions"></slot>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
