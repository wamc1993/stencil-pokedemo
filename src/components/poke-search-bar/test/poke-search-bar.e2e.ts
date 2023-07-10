import { newE2EPage } from '@stencil/core/testing';

describe('poke-search-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poke-search-bar></poke-search-bar>');

    const element = await page.find('poke-search-bar');
    expect(element).toHaveClass('hydrated');
  });
});
