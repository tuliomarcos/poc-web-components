import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'ri-button',
	styleUrl: 'button.css',
	shadow: true,
})

export class RiButton {
	@Prop() label: string
	@Prop() className: string = ''
	@Prop() size: string
	@Prop() type: string
	@Prop() disabled: boolean

	render() {
		return (
			<button class={`button ${this.className} ${this.size} ${this.type} ${this.disabled ? 'disabled' : ''}`}>
				{this.label}
			</button>
		);
	}
}