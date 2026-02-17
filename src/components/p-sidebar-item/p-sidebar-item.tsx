import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-sidebar-item',
    styleUrl: 'p-sidebar-item.scss',
    shadow: true,
})
export class PSidebarItem {
    @Prop()
    public dark?: boolean = false

    @Prop()
    public active?: boolean = false

    @Prop()
    public url: string

    @Prop()
    public icon?: string

    private getComponentClasses() {
        return {
            papier: true,
            'is--dark': this.dark,
            'is--active': this.active,
        }
    }

    render() {
        return (
            <Host>
                <div class={this.getComponentClasses()}>
                    {this.icon && <p-icon icon={this.icon} />}
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
