import './App.css';
import Home from './components/Home';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className='pages'>
        <Home />
        <AnimationOnScroll animateIn="animate__fadeIn">
          <About />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <Projects />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <Contact />
        </AnimationOnScroll>
      </section>

    </div>
  );
}

export default App;
