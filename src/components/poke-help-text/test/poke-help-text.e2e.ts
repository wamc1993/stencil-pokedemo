import { newE2EPage } from '@stencil/core/testing';

describe('poke-help-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<poke-help-text></poke-help-text>');

    const element = await page.find('poke-help-text');
    expect(element).toHaveClass('hydrated');
  });
});
