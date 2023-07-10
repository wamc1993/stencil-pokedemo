import { newE2EPage } from '@stencil/core/testing';

describe('poke-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poke-detail></poke-detail>');

    const element = await page.find('poke-detail');
    expect(element).toHaveClass('hydrated');
  });
});
