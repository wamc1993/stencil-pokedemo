import { Component, Host, State, Watch, Listen, h } from '@stencil/core';

@Component({
  tag: 'poke-detail',
  styleUrl: 'poke-detail.css',
  shadow: true,
})
export class PokeDetail {
  private textInputRef?: HTMLInputElement;

  @State() selectedPokemon: Pokedex | null = null;
  @State() mote: string = '';

  @Listen('selectePokemonEvent', { target: 'body' })
  handleFilterTextChange(event: CustomEvent<string>) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.detail}`)
      .then(res => res.json())
      .then(res => {
        this.selectedPokemon = res;
      })
      .catch(() => {
        this.selectedPokemon = null;
      });
  }

  @Watch('selectedPokemon')
  watchSelectedPokemonHanlder(newSelected: Pokedex | null) {
    if (newSelected) {
      const savedMote = localStorage.getItem(newSelected.name) || '';
      this.mote = savedMote;
      this.textInputRef.focus();
    }
  }

  handleOnChangeInput(event: Event) {
    this.mote = (event.target as HTMLInputElement).value;
  }

  handleOnClickSaveButton() {
    localStorage.setItem(this.selectedPokemon.name, this.mote);
  }

  render() {
    return (
      <Host
        style={{
          width: this.selectedPokemon ? '300px' : '1px',
        }}
      >
        {this.selectedPokemon ? (
          <div class="details">
            <h2 part="detail-title">{this.selectedPokemon.name}</h2>
            {this.mote ? <h3 part="detail-mote">{this.mote}</h3> : <i>Sin nombre</i>}
            <img part="detail-image" src={this.selectedPokemon.sprites.other['official-artwork'].front_default} />
            <div class="mote-field">
              <input part="detail-input" ref={el => (this.textInputRef = el as HTMLInputElement)} value={this.mote} onInput={this.handleOnChangeInput.bind(this)} />
              <button part="detail-button" onClick={this.handleOnClickSaveButton.bind(this)}>
                Guardar
              </button>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </Host>
    );
  }
}

export interface Pokedex {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface GenerationV {
  'black-white': Sprites;
}

export interface GenerationIv {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  'platinum': Sprites;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  'red-blue': RedBlue;
  'yellow': RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface GenerationIii {
  'emerald': OfficialArtwork;
  'firered-leafgreen': Gold;
  'ruby-sapphire': Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationVii {
  'icons': DreamWorld;
  'ultra-sun-ultra-moon': Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  'dream_world': DreamWorld;
  'home': Home;
  'official-artwork': OfficialArtwork;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
