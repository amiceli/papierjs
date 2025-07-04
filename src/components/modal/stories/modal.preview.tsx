import { Component, Element, Prop, h } from '@stencil/core'

@Component({
    tag: 'p-modal-preview',
})
export class PModalPreview {
    @Prop()
    title?: boolean = false
    @Element()
    public el: HTMLElement

    public openModal() {
        this.el.querySelector('p-modal')?.open()
    }

    public closeModal() {
        this.el.querySelector('p-modal')?.close()
    }

    render() {
        return (
            <div>
                {this.title === true ? (
                    <p-modal>
                        <span slot="title">Modal title</span>
                        <span slot="sub-title">Modal sub title</span>
                        <span slot="text">This is an example of modal which is implemented with pure CSS! :D</span>
                        <p-button type="warning" onClick={() => this.closeModal()}>
                            Close it !
                        </p-button>
                    </p-modal>
                ) : (
                    <p-modal>
                        <h1>Ciao fratello</h1>
                        <p>click on button, cross or outside modal to close it.</p>
                        <br />
                        <p-button type="success" onClick={() => this.closeModal()}>
                            Close modal
                        </p-button>
                    </p-modal>
                )}
                <p-button
                    type={this.title ? 'secondary' : 'primary'}
                    onClick={() => {
                        this.openModal()
                    }}
                >
                    Open modal
                </p-button>
            </div>
        )
    }
}
