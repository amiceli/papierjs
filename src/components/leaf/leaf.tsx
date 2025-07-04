import { Component, Prop, h } from '@stencil/core'

@Component({
    tag: 'p-leaf',
    styleUrl: 'leaf.scss',
})
export class Pleaf {
    @Prop()
    dark?: boolean = false

    public getParentClass() {
        return this.dark ? 'papier is--dark' : 'papier'
    }

    render() {
        return (
            <div class={this.getParentClass()}>
                <slot />
            </div>
        )
    }
}
