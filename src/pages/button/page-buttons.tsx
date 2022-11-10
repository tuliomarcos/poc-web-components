import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-button',
	styleUrl: 'page-button.css',
  shadow: true,
})

export class PageButton {
  buttonClicked = (button: CustomEvent) => {
    console.log(`Clicou no botão ${button.detail}`)
  }

  render() {
    return (
      <div class="page-button">
        <div class="page-button__item">
          <h4>Botões Pequenos</h4>
          <ri-button label="Primary" size="small" type="primary" onClickEmitter={this.buttonClicked}>
          </ri-button>
          <ri-button label="Secundary" size="small" type="secundary" onClickEmitter={this.buttonClicked}>
          </ri-button>
          <ri-button label="Custom" size="small" type="custom" onClickEmitter={this.buttonClicked}>
          </ri-button>
        </div>
        <div class="page-button__item">
          <h4>Botões Médios</h4>
          <ri-button label="Primary" size="medium" type="primary" onClickEmitter={this.buttonClicked}>
          </ri-button>
          <ri-button label="Secundary" size="medium" type="secundary" onClickEmitter={this.buttonClicked}>
          </ri-button>
          <ri-button label="Custom" size="medium" type="custom" onClickEmitter={this.buttonClicked}>
          </ri-button>
        </div>
        <div class="page-button__item">
          <h4>Botões Grandes</h4>
          <ri-button label="Primary" size="large" type="primary" onClickEmitter={this.buttonClicked}>
          </ri-button>
          <ri-button label="Secundary" size="large" type="secundary" onClickEmitter={this.buttonClicked}>
          </ri-button>
          <ri-button label="Custom" size="large" type="custom" onClickEmitter={this.buttonClicked}>
          </ri-button>
        </div>
        <div class="page-button__item">
          <h4>Botões Desabilitados</h4>
          <ri-button label="Primary" size="medium" type="primary" disabled>
          </ri-button>
          <ri-button label="Secundary" size="medium" type="secundary" disabled>
          </ri-button>
          <ri-button label="Custom" size="medium" type="custom" disabled>
          </ri-button>
        </div>
      </div>
    );
  }
}
