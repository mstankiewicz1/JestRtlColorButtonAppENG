import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('button has correct initial color', () => {
  render(<App/>);

  // find am element with a role button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { option: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);
  //expect the background color to be blue 
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

it('initial conditions', () => {
  render(<App/>);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { option: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

it('Checkbox disabled button on first click and enables on second click', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});