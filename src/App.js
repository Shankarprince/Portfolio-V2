import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header.js';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
