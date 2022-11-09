import { Component, h, State } from '@stencil/core';

type ComponentInfos = {
	id: number,
	url: string,
	name: string,
}[]

@Component({
	tag: 'app-home',
	styleUrl: 'app-home.css',
	shadow: true,
})

export class AppHome {
	@State() components: ComponentInfos = [
		{
			id: 0,
			url: '/button',
			name: 'Botão',
		},
		{
			id: 1,
			url: '/input',
			name: 'Input Text',
		},
		{
			id: 2,
			url: '/dropdown',
			name: 'Dropdown',
		},
	]

	render() {
		return (
			<div class="app-home">
				<p>
					Bem vindo ao nosso Design System, abaixo temos alguns links para redirecionar para alguns dos nossos exemplos de componentes:
				</p>

				<ul>
					{this.components.map((component) =>
						<li>
							<stencil-route-link url={component.url}>
								{component.name}
							</stencil-route-link>
						</li>
					)}
				</ul>
			</div>
		);
	}
}
