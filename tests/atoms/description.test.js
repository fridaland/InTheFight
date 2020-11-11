import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Description from '../../src/components/atoms/description';

test('Displays a description', () => {
  const desc = render(<Description text="A long, long, time ago." />);

  expect(screen.getByTestId('description')).toHaveTextContent('A long, long, time ago');
  expect(desc).toMatchSnapshot();
});
