/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import clsx from 'clsx';
import type * as Polymorphic from '../../utilities/react-polymorphic';

import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

import * as styles from './Button.css';

interface Props {
  variant?: keyof typeof styles.variant;
}

type PolymorphicButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof ButtonBase>,
  ButtonBaseProps & Props
>;

export type ButtonProps = Polymorphic.OwnProps<PolymorphicButton>;

export const Button = React.forwardRef((props, ref) => {
  const { className, variant = 'primary', ...restProps } = props;

  return <ButtonBase ref={ref} className={clsx(styles.root, styles.variant[variant], className)} {...restProps} />;
}) as PolymorphicButton;
