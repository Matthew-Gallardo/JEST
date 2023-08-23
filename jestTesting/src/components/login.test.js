import React from 'react';
import renderer from 'react-test-renderer'; // Import the renderer from react-test-renderer
import Login from './login';

test('renders login form correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});
