import { newSpecPage } from '@stencil/core/testing';
import { PokeContainer } from '../poke-container';

describe('poke-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokeContainer],
      html: `<poke-container></poke-container>`,
    });
    expect(page.root).toEqualHtml(`
      <poke-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poke-container>
    `);
  });
});
