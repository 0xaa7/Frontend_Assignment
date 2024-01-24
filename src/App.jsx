import "./App.scss";
import Navbar from "./components/navbar/navbar";
import styled from 'styled-components';
import LandingPage from "./pages/landingPage/LandingPage";
import Portfolio from "./components/portfolio/Portfolio";
import WhyUsPage from "./pages/whyUsPage/WhyUsPage";

const StyledApp = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-family: 'Allerta Stencil', sans-serif;
`;

const App = () => {
  return (
    <StyledApp>
    <section id="landing_page">
      <Navbar />
      <LandingPage />
    </section>
    <section>
      <Portfolio />
    </section>
    <section>
      <WhyUsPage />
    </section>
      
      
    </StyledApp>
  );
};

export default App;