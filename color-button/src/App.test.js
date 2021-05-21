import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCameWithSpaces } from './App';

it('button has correct initial color', () => {
  render(<App/>);

  // find am element with a role button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { option: 'Change to Midnight Blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button
  fireEvent.click(colorButton);
  //expect the background color to be blue 
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

it('initial conditions', () => {
  render(<App/>);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { option: 'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

it('Checkbox disabled button on first click and enables on second click', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

it('Disabled button has gray background and reverts to red', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: grey');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
});

it('Clicked disabled button has grey background and reverts to blue', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // change button to blue
  fireEvent.click(colorButton);

   // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: grey');

  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MidnightBlue');
});

describe('spaces before camel-case capital lettersWorks', () => {
  it('Works for no inner capital letters', () => {
    expect(replaceCameWithSpaces('Red')).toBe('Red');
  });
  it('Works for no inner capital letters', () => {
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  it('Works for multiple inner capital letters', () => {
    expect(replaceCameWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
