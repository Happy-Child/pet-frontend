import React, { FormHTMLAttributes } from 'react';

export const AppForm: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  ...attrs
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <form {...attrs} autoComplete="off">
    {children}
  </form>
);
