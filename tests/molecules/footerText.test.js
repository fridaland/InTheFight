import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FooterText from '../../src/components/molecules/footerText';

test('Displays the footer text', () => {
  const footerText = render(<FooterText />);

  expect(screen.getByRole('heading')).toHaveTextContent('IN THE FIGHT');
  expect(footerText).toMatchSnapshot();
});