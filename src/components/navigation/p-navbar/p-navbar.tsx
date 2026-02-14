import { Component, Element, Host, h, Prop } from '@stencil/core'

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

    @Prop()
    public dark?: boolean = false

    @Prop()
    public rootLink: string = '/'

    @Prop()
    public rootTitle: string = ''

    public getClass() {
        return {
            border: true,
            fixed: this.fixed === true,
            'split-nav': this.split === true,
            'is--dark': this.dark === true,
        }
    }

    public componentDidLoad() {
        const items = Array.from(this.el.getElementsByTagName('p-navbar-item'))

        for (const item of items) {
            item.style.marginLeft = '10px'
        }

        if (this.dark) {
            for (const item of items) {
                item.setAttribute('dark', 'true')
            }
        }

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
