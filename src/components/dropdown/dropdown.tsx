import { Component, h } from '@stencil/core';

@Component({
	tag: 'ri-dropdown',
	styleUrl: 'dropdown.css',
	shadow: true,
})

export class RiDropdown {
	render() {
		return (
			<select>
				<option></option>
			</select>
		);
	}
}