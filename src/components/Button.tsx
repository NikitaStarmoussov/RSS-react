import React from 'react';

type Props = {
  disabled: boolean;
};

type ButtonProps = Props & {
  children: string;
};

export default function Button({ children, disabled }: ButtonProps) {
  return (
    <button type="submit" disabled={disabled}>
      {children}
    </button>
  );
}