import React from 'react';
import { createRoot } from 'react-dom';
import Button from '../button';
import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(<Button />);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId('button')).toHaveTextContent('click me please');
});


  
  
