import { newSpecPage } from '@stencil/core/testing';
import { PokeHelpText } from '../poke-help-text';

describe('poke-help-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokeHelpText],
      html: `<poke-help-text></poke-help-text>`,
    });
    expect(page.root).toEqualHtml(`
      <poke-help-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poke-help-text>
    `);
  });
});
