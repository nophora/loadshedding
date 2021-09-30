import React from 'react';
import { render } from '@testing-library/react';
import Platform from './platform';

test('renders learn react link', () => {
  const { getByText } = render(<Platform />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
