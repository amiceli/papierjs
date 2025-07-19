import { Component, h, Prop } from '@stencil/core'

/**
 * @slots default - p-leaf content
 */
@Component({
    tag: 'p-leaf',
    styleUrl: 'p-leaf.scss',
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
