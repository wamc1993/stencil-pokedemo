import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'poke-container',
  styleUrl: 'poke-container.css',
  shadow: true,
})
export class PokeContainer {
  render() {
    return (
      <Host part="container">
        <slot name="slot-one" />
        <div class="poke-container_row">
          <slot name="slot-two" />
          <slot name="slot-three" />
        </div>
      </Host>
    );
  }
}
