import React from 'react';
import clsx from 'clsx';
import { variants, sizes } from './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: keyof typeof variants;
  /**
   * How large should the button be?
   */
  size?: keyof typeof sizes;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(variants[variant], sizes[size])}
      {...props}
    >
      {label}
    </button>
  );
};


