import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})

export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <stencil-route-link url="/">
            <h1>Rock it Design System</h1>
          </stencil-route-link>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/button" component="page-button" exact={true} />
              <stencil-route url="/input" component="ri-input" exact={true} />
              <stencil-route url="/dropdown" component="ri-dropdown" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
