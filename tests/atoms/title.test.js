import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Title from '../../src/components/atoms/title';

test('Displays a title', () => {
  const title = render(<Title text="Grand Title" />);

  expect(screen.getByTestId('hero-title')).toHaveTextContent('Grand Title');
  expect(title).toMatchSnapshot();
});
