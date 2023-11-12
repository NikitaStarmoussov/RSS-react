import { render} from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  test('renders correctly', () => {
    const { getByRole } = render(Input({ disabled: false, value: '', onChange: () => {} }));
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('disables the input when disabled prop is true', () => {
    const { getByRole } = render(Input({ disabled: true, value: '', onChange: () => {} }));
    const inputElement = getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });
});