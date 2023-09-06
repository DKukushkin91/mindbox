import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 40rem auto;
  padding: 0 40rem;
  max-width: 500rem;
`;

const Title = styled.h1`
  font-size: 72rem;
  margin: 0 0 20rem;
  color: var(--color-pink-light);
  text-align: center;
  font-weight: 100;
`;

const TasksForm = styled.form`
  margin: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8rem 16rem hsla(218,6%,73%,.48);
`;

export const styles = {
    Wrapper,
    Title,
    TasksForm,
};
