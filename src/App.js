import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
// import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
// import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import { useContext } from 'react';
import { themeContext } from "./Context";
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
    >
      
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      {/* <Experience></Experience> */}
      <Works></Works>
      <Portfolio></Portfolio>
      {/* <Testimonial></Testimonial> */}
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
