import { Component, Host, State, Prop, Listen, Event, EventEmitter, h } from '@stencil/core';
import { PokeItem } from './functional-components/poke-item';

@Component({
  tag: 'poke-grid',
  styleUrl: 'poke-grid.css',
  shadow: true,
})
export class PokeGrid {
  @Prop() itemSize: number = 100;
  @State() pokemonList: { id: number; name: string; imageUrl: string }[] = [];
  @State() allPokemonList: { id: number; name: string; imageUrl: string }[] = [];

  @Event({ bubbles: true, composed: true }) selectePokemonEvent: EventEmitter<string>;

  getPokemonList() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(res => {
        this.allPokemonList = res.results.map(({ name, url }) => {
          const id =
            url
              .match(/^.*pokemon.*(\/[0-9]+\/).*$/)?.[1]
              ?.replace('/', '')
              .replace('/', '') ?? '1';

          return {
            name,
            id: Number(id),
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };
        });
      })
      .catch(() => {
        this.allPokemonList = [];
      });
  }

  filterPokemonList(filterText: string) {
    if (filterText.length) {
      this.pokemonList = this.allPokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(filterText));
    } else {
      this.pokemonList = this.allPokemonList;
    }
  }

  setSelectedPokemonAction(name: string): void {
    this.selectePokemonEvent.emit(name);
  }

  componentWillLoad() {
    this.getPokemonList().then(() => {
      this.filterPokemonList('');
    });
  }

  @Listen('filterByNameEvent', { target: 'body' })
  handleFilterTextChange(event: CustomEvent<string>) {
    this.filterPokemonList(event.detail);
  }

  render() {
    return (
      <Host part="grid-container">
        {this.pokemonList.map(({ id, name, imageUrl }) => (
          <PokeItem id={id} name={name} imageUrl={imageUrl} size={this.itemSize} onClick={this.setSelectedPokemonAction.bind(this)}></PokeItem>
        ))}
      </Host>
    );
  }
}
