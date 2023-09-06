import styled from 'styled-components';

const Label = styled.label`
  display: block;
  padding: 8rem 12rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  margin: 0;
  top: 0;
  left: 0;
`;

const TextWrapper = styled.span`
  display: flex;
  column-gap: 8rem;
  color: var(--color-text-primary);
  font-size: 14rem;
  line-height: 14rem;
  user-select: none;
  transition: all 0.3s ease 0.3s;
  
  &::before {
    content: '';
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    border: 1px solid var(--color-border-gray);
    flex-shrink: 0;
  }
  
  ${Input}:checked + & {
    color: var(--color-text-tertiary);
    transition: all 0.3s ease 0.3s;
    
    &::before {
      border-color: var(--color-green-light);
      background-image: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 10L0 5.19231L1.4 3.84615L5 7.30769L12.6 0L14 1.34615L5 10Z' fill='green'/%3E%3C/svg%3E%0A");
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }
  }
`;

const Text = styled.span`
  position: relative;
`;

const TextDecoration = styled.span<{$isChecked: boolean}>`
  width: ${({$isChecked}) => ($isChecked ? '100%' : 0)};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
  background: var(--color-border-gray);
  transition: all 0.3s ease;
`;

export const styles = {
    Label,
    Input,
    TextWrapper,
    Text,
    TextDecoration,
};
