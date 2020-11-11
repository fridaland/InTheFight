import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MiddleSectionElement from '../../src/components/molecules/MiddleSectionElement';

test('Displays the middle section element', () => {
  const midSectionElemnt = render(() => <MiddleSectionElement />);

  expect(midSectionElemnt).toMatchSnapshot();
});