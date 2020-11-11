import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ClickableIcon from '../../src/components/atoms/ClickableIcon';

test('Displays a clickable icon', () => {
  const testImg = <img src="#" />
  const icon = render(<ClickableIcon href="#" link="#" img={testImg} alt="fantastic logo" />);
  
  expect(screen.getByAltText('fantastic logo')).toBeInTheDocument();
  expect(icon).toMatchSnapshot();
});