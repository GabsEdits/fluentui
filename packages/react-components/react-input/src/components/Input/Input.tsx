import * as React from 'react';
import { useInput_unstable } from './useInput';
import { renderInput_unstable } from './renderInput';
import { useInputStyles_unstable } from './useInputStyles';
import type { InputProps } from './Input.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * The Input component allows people to enter and edit text.
 */
export const Input: ForwardRefComponent<InputProps> = React.forwardRef((props, ref) => {
  const state = useInput_unstable(props, ref);

  useInputStyles_unstable(state);

  const { useInputStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderInput_unstable(state);
});

Input.displayName = 'Input';
