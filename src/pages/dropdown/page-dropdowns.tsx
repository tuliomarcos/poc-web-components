import { Component, h, State } from '@stencil/core';

type ValueData = ({
  id: number | string
  name: string
  model?: string | number
  company?: string
}[] | string[])

@Component({
	tag: 'page-dropdown',
	styleUrl: 'page-dropdown.css',
	shadow: true,
})

export class AppHome {
  // @State() values: ValueData = ['Argo', 'Celta', 'Cruze', '118i']
  @State() values: ValueData = [
    {
      id: 0,
      name: 'Argo',
      company: 'Fiat'
    },
    {
      id: 0,
      name: 'Celta',
      model: 2008,
    },
    {
      id: 0,
      name: 'Cruze',
      model: 2014,
      company: 'GM'
    },
    {
      id: 0,
      name: '118i',
      model: 2016,
      company: 'BMW'
    }
  ]

  valueSelected = (value: CustomEvent) => {
    console.log(value.detail)
  }

	render() {
		return (
      <div class="page-input">
        <ri-dropdown
          name="select-car"
          label="Escolha o carro desejado: "
          values={this.values}
          onChangeEmitter={this.valueSelected}
        ></ri-dropdown>
      </div>
		);
	}
}
