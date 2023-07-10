import { newE2EPage } from '@stencil/core/testing';

describe('poke-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poke-container></poke-container>');

    const element = await page.find('poke-container');
    expect(element).toHaveClass('hydrated');
  });
});
