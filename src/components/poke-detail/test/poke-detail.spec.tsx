import { newSpecPage } from '@stencil/core/testing';
import { PokeDetail } from '../poke-detail';

describe('poke-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokeDetail],
      html: `<poke-detail></poke-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <poke-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </poke-detail>
    `);
  });
});
