import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SecondFooterSection from '../../src/components/molecules/SecondFooterSection';

test('Displays the second footer section', () => {
  const footerSection = render(<SecondFooterSection text='Sweet test quote' author='Test McTesterson' image={'test'}/>);

  expect(screen.getByText('Sweet test quote')).toBeInTheDocument();
  expect(footerSection).toMatchSnapshot();
});
