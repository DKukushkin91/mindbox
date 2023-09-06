import styled from 'styled-components';

interface InputPropsInterface {
    $hasError: boolean;
}

const Input = styled.input<InputPropsInterface>`
  color: var(--color-text-primary);
  font-size: 14rem;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  margin: 0;
  border: 0;
  border-radius: 0;
  width: 100%;
  outline: none;
  padding: 8rem 12rem;
  
  &::placeholder {
    color: ${({$hasError}) => ($hasError ? 'var(--color-error)' : 'var(--color-border)')};
    font-size: 14rem;
    line-height: 1;
    opacity: 1;
  }
`;

export const styles = {
    Input,
};
