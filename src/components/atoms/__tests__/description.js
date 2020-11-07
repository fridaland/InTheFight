import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Description from '../description';

test('Displays a description', () => {
  render(<Description text="A long, long, time ago." />);

  const txt = 'A long, long, time ago';

  expect(screen.getByTestId('description')).toHaveTextContent(txt);
});
