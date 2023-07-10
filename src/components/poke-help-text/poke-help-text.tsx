import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'poke-help-text',
  styleUrl: 'poke-help-text.css',
  shadow: false,
})
export class PokeHelpText {
  @Prop() image: string;
  @Prop() text: string;

  render() {
    return (
      <Host>
        <div part="container" class="container-component-HelpText row m-0 align-items-center">
          {this.image !== '' && <img part="image" src={this.image} alt="help-icon" class="icon-help mr-1" />}
          <p part="text" class="help-text">
            {this.text}
          </p>
        </div>
      </Host>
    );
  }
}
