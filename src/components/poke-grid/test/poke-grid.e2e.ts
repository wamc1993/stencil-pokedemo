import { newE2EPage } from '@stencil/core/testing';

describe('poke-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poke-grid></poke-grid>');

    const element = await page.find('poke-grid');
    expect(element).toHaveClass('hydrated');
  });
});
