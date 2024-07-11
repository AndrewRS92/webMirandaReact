import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders primary button with correct styles', () => {
  const { getByText } = render(<Button type="primary" />);
  const button = getByText('Button');
  expect(button).toHaveStyle({
    backgroundColor: '#135846',
    color: '#ebf1ef',
  });
});

test('renders secondary button with correct styles', () => {
  const { getByText } = render(<Button type="secondary" />);
  const button = getByText('Button');
  expect(button).toHaveStyle({
    backgroundColor: '#ebf1ef',
    color: '#135846',
  });
});
