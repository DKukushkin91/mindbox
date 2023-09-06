import styled from 'styled-components';

const Form = styled.form`
  display: grid;  
  
  & > input {
    grid-area: 1 / -1;
    padding-right: 61rem;
  }
`;

const Button = styled.button<{$hasError: boolean}>`
  font-size: 16rem;
  width: 49rem;
  height: 100%;
  line-height: 1;
  border: 0;
  border-left: 1rem solid var(--color-border-gray);
  padding: 0;
  background: var(--color-white);
  cursor: ${({$hasError}) => ($hasError ? 'default' : 'pointer')};
  grid-area: 1 / -1;
  position: relative;
  justify-self: flex-end;
  
  &:hover {
    &::after,
    &::before {
      background: ${({$hasError}) => ($hasError ? 'var(--color-error)' : 'var(--color-green)')};
      transform: translate(-50%, -50%) scale(1.2) ${({$hasError}) => ($hasError ? 'rotate(45deg)' : '')};
      transition: all 0.3s ease;
    }
  }
  
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1) ${({$hasError}) => ($hasError ? 'rotate(45deg)' : '')};
    background: ${({$hasError}) => ($hasError ? 'var(--color-error)' : 'var(--color-border-gray)')};
    transition: all 0.3s ease;
  }
  
  &::after {
    width: 1.5rem;
    height: 20rem;
  }
  
  &::before {
    width: 20rem;
    height: 1.5rem;
  }
`;

export const styles = {
    Form,
    Button,
};
