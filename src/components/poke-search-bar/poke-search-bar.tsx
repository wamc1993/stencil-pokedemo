import { Component, Host, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'poke-search-bar',
  styleUrl: 'poke-search-bar.css',
  shadow: true,
})
export class PokeSearchBar {
  @State() text: string;

  @Event({ bubbles: true, composed: true }) filterByNameEvent: EventEmitter<string>;

  handleOnInput(event: Event) {
    this.text = (event.target as HTMLInputElement).value;
    this.filterByNameEvent.emit(this.text);
  }

  render() {
    return (
      <Host>
        <button part="search-button">Buscar</button>
        <input part="search-input" type="text" onInput={this.handleOnInput.bind(this)} />
      </Host>
    );
  }
}
