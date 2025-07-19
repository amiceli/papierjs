import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'p-spinner',
    styleUrl: 'p-spinner.scss',
    shadow: true,
})
export class PSpinner {
    @Prop()
    public large: boolean = false

    @Prop()
    public color?: string

    @Prop()
    public dark?: boolean

    public getStyle() {
        return {
            backgroundColor: this.color || 'currentColor',
        }
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'p-spinner': true,
                        papier: true,
                        'is--large': this.large,
                        'is--dark': this.dark,
                    }}
                >
                    <div class="border border-primary" style={this.getStyle()} />
                    <div class="border border-primary" style={this.getStyle()} />
                    <div class="border border-primary" style={this.getStyle()} />
                </div>
            </Host>
        )
    }
}
