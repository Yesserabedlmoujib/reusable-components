import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';


const StButton: React.FC<ButtonProps> = ({ title, icon, onClick, variant = 'primary' }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </StyledButton>
  );
};

export default StButton;
