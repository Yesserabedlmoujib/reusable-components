import styled, { css } from 'styled-components';

const baseStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 2px 16px;
  border-radius: 5px;
`;

const primaryStyles = css`
  background-color: #1d4ed8;
  color: white;

  &:hover {
    background-color: #2563eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.5);
  }
`;

const secondaryStyles = css`
  background-color: #f97316;
  color: white;

  &:hover {
    background-color: #ea580c;
  }

  &:focus {
    outline: none;
      box-shadow: 0 0 0 2px rgba(185, 28, 28, 1);
  }
`;

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  ${baseStyles}

  ${(props) => props.variant === 'primary' && primaryStyles}
  ${(props) => props.variant === 'secondary' && secondaryStyles}
`;
