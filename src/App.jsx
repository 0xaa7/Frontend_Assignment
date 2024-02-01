import "./App.scss";

import styled from 'styled-components';
import LandingPage from "./pages/landingPage/LandingPage";
import Portfolio from "./components/portfolio/Portfolio";
import WhyUsPage from "./pages/whyUsPage/WhyUsPage";
import OurServices from "./pages/OurServices/OurServices";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

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
      
        <Portfolio />
      
     
        <WhyUsPage />
     
      <section id="ourservices">

        <OurServices />
      </section>
    
        <Footer />
     
      </section>
    
    </StyledApp>
  );
};

export default App;
