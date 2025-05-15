import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './routes/Error';
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';

function App() {

  return (

    <Router>
      <div className='text-white bg-[linear-gradient(to_bottom,#9B849F_0%,#9B849F_1%,#99008A_100%)] h-screen'>
        <Header />


          <main>
            <Routes>
              <Route path="*" element={<Error/>} />
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>


        <Footer />
      </div>

    </Router>
  )
}

export default App
