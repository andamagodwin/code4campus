
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <>
      <Navbar />
      <div className="pt-1">
        <Hero />
        {/* You can add more sections/components below */}
      </div>
    </>
  );
}

export default App
