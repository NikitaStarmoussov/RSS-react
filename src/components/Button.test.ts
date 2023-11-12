import { render } from '@testing-library/react';
import Button from './Button';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as matchers from '@testing-library/jest-dom/matchers';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(Button({ disabled: false, children: 'Click Me' }));
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('disables the button when disabled prop is true', () => {
    const { getByRole } = render(Button({ disabled: true, children: 'Click Me' }));
    const buttonElement = getByRole('button');

    expect(buttonElement).toBeDisabled();
  });

});