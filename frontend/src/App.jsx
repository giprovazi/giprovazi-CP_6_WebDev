import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';

function App() {

  return (
    <Router>
      <Header />


        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>


      <Footer />

    </Router>
  )
}

export default App
