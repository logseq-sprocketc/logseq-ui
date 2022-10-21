import React from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import './styles.css';

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
}

export const Switch = ({
  checked,
  defaultChecked,
  ...props
}: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className="ls-switch-root"
      checked={checked}
      defaultChecked={defaultChecked}
      {...props}
    >
      <RadixSwitch.Thumb className="ls-switch-thumb"/>
    </RadixSwitch.Root>
  )
}
