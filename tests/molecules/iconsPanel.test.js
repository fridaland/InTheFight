import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import IconsPanel from '../../src/components/molecules/iconsPanel';

test('Displays the icons panel', () => {
  const iconsPanel = render(() => <IconsPanel />);

  expect(iconsPanel).toMatchSnapshot();
});