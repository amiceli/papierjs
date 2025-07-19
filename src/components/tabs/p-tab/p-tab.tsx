import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-tab',
    styleUrl: 'p-tab.scss',
    shadow: true,
})
export class PTab {
    @Prop()
    title: string
    @Prop({
        mutable: true,
    })
    selected?: boolean = false
    @Prop()
    dark?: boolean = false

    render() {
        return (
            <Host>
                <div
                    class={{
                        papier: true,
                        'is--selected': this.selected,
                        'is--dark': this.dark,
                    }}
                >
                    <slot />
                </div>
            </Host>
        )
    }
}
