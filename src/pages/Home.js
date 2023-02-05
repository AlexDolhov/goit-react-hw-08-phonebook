import styled from 'styled-components';

const Container = styled.div`
  min-height: calc(100vh - 51px);
  display: flex;
  align-items: center;
  justify-content: center;
  /* &:after {
    border: solid 150px #f8d05d;
    transform: rotate(45deg);
    position: absolute;
    z-index: -1;
    content: '';
    top: 50%;
    left: 50%;
    height: 0;
    width: 0;
  } */
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <Title>
        Welcome to Phonebook
        <br />
        <span role="img" aria-label="Phone icon">
          📞
        </span>
      </Title>
    </Container>
  );
};

export default Home;
