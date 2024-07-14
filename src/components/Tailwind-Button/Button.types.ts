
import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
   title: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}