import { Component, h } from '@stencil/core';

@Component({
	tag: 'page-input',
	styleUrl: 'page-input.css',
	shadow: true,
})

export class AppHome {
	valueInputed = (value: CustomEvent) => {
		console.log(value.detail)
	}

	render() {
		return (
      <div class="page-input">
        <ri-input
          name="text"
          label="Primeiro nome: "
          maxlength="10"
          autocomplete="on"
          placeholder="Digite até 10 caracteres"
          onInputEmitter={this.valueInputed}
        ></ri-input>
      </div>
		);
	}
}
