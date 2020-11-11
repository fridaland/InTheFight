import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HomePageLogo from '../../src/components/molecules/homePageLogo';

test('Displays the homepage logo', () => {
  const homepageLogo = render(() => <HomePageLogo />);

  expect(homepageLogo).toMatchSnapshot();
});