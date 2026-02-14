import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-navbar-item',
    styleUrl: 'p-navbar-item.scss',
    shadow: true,
})
export class PNavbarItem {
    @Prop()
    public dark?: boolean = false

    @Prop()
    public href: string = '/'

    @Prop()
    public target?: string

    @Prop()
    public icon?: string

    public getClass() {
        return {
            papier: true,
            'with--icon': this.icon !== undefined,
            'is--dark': this.dark === true,
        }
    }

    render() {
        return (
            <Host>
                <li class={this.getClass()}>
                    <a href={this.href} target={this.target}>
                        {this.icon && <p-icon color={this.dark ? 'white' : '#41403e'} icon={this.icon} size={20}></p-icon>}
                        <slot />
                    </a>
                </li>
            </Host>
        )
    }
}
