import { Component, h } from '@stencil/core';

@Component({
	tag: 'ri-input',
	styleUrl: 'input.css',
	shadow: true,
})

export class RiInput {
	render() {
		return (
			<input type='text'></input>
		);
	}
}