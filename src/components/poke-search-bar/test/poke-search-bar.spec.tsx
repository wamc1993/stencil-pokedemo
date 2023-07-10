import { newSpecPage } from '@stencil/core/testing';
import { PokeSearchBar } from '../poke-search-bar';

describe('poke-search-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokeSearchBar],
      html: `<poke-search-bar></poke-search-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <poke-search-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poke-search-bar>
    `);
  });
});
