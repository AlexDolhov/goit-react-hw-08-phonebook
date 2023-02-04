import styled from 'styled-components';

const Container = styled.div`
  min-height: calc(100vh - 51px);
  display: flex;
  align-items: center;
  justify-content: center;
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
        <span role="img" aria-label="Phone icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
};

export default Home;
