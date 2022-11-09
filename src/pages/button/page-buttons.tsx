import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-button',
	styleUrl: 'page-button.css',
  shadow: true,
})

export class PageButton {
  render() {
    return (
      <div class="page-button">
        <div class="page-button__item">
          <h4>Botões Pequenos</h4>
          <ri-button label="Primary" size="small" type="primary">
          </ri-button>
          <ri-button label="Secundary" size="small" type="secundary">
          </ri-button>
          <ri-button label="Custom" size="small" type="custom">
          </ri-button>
        </div>
        <div class="page-button__item">
          <h4>Botões Médios</h4>
          <ri-button label="Primary" size="medium" type="primary">
          </ri-button>
          <ri-button label="Secundary" size="medium" type="secundary">
          </ri-button>
          <ri-button label="Custom" size="medium" type="custom">
          </ri-button>
        </div>
        <div class="page-button__item">
          <h4>Botões Grandes</h4>
          <ri-button label="Primary" size="large" type="primary">
          </ri-button>
          <ri-button label="Secundary" size="large" type="secundary">
          </ri-button>
          <ri-button label="Custom" size="large" type="custom">
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
