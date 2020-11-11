import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DateField from '../../src/components/atoms/dateField';

test('Displays a date', () => {
  const dateField = render(<DateField date="March 20, 2020" />);

  expect(screen.getByTestId('date-field')).toHaveTextContent('March 20, 2020');
  expect(dateField).toMatchSnapshot();
});
