import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../../src/components/atoms/button';

test('Displays a button', () => {
  const button = render(<Button text="Submit" color="purple" />);

  expect(screen.getByRole('button')).toHaveTextContent('Submit');
  expect(button).toMatchSnapshot();
});
