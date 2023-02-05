import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid rgb(0 0 0 / 12%);
  border-top: 2px solid #ff6347;

  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
};
