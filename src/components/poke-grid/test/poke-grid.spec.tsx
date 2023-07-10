import { newSpecPage } from '@stencil/core/testing';
import { PokeGrid } from '../poke-grid';

describe('poke-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokeGrid],
      html: `<poke-grid></poke-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <poke-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poke-grid>
    `);
  });
});
