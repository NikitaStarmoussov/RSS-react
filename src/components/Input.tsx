import React from 'react';

type Props = {
  disabled: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ disabled, value, onChange }: Props) {
  return (
    <input type="text" disabled={disabled} value={value} onChange={onChange} />
  );
}