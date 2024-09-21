import './App.css';
import About from './components/about';
import HeroSection from './components/herosection';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
      </main>
      <section>
        <About />
      </section>
    </div>
  );
}

export default App;
