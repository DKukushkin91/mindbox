import styled from 'styled-components';

interface WrapperPropsInterface {
    $hasBorderTop: boolean;
}

const Wrapper = styled.div<WrapperPropsInterface>`
  border-top: ${({$hasBorderTop}) => ($hasBorderTop ? '1rem solid var(--color-border-gray)' : 0)};
  border-bottom: 1rem solid var(--color-border-gray);
  background: var(--color-white);
`;

export const styles = {
    Wrapper,
};
