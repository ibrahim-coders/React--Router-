import { Route, Routes } from 'react-router';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
