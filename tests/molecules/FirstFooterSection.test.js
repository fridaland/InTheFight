import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FirstFooterSection from '../../src/components/molecules/FirstFooterSection';

test('Displays the subscription form', () => {
  const footerSection = render(<FirstFooterSection title='Subscribe to get updates!' />);

  expect(screen.getByRole('heading')).toHaveTextContent('Subscribe to get updates!');
  expect(footerSection).toMatchSnapshot();
});
