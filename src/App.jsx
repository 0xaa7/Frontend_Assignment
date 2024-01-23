import "./App.scss";
import Navbar from "./components/navbar/navbar";
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: 'Quicksand', sans-serif;
`;

const App = () => {
  return (
    <StyledApp>
    <section>
      <Navbar />
    </section>
      
      
    </StyledApp>
  );
};

export default App;