import { Component, Host, h, Prop } from '@stencil/core'

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
    @Prop()
    public dark?: boolean = false

    @Prop()
    public logo?: string

    @Prop()
    public title: string

    @Prop()
    public user?: PSidebarUser

    render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--dark': this.dark,
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
