import {Link} from 'react-router-dom'
import BarraPesquisa from './BarraPesquisa'
import { ShoppingCart } from 'lucide-react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
   <header className='flex items-center justify-between p-4 '>
      <div className="flex items-center gap-[6rem]">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={50} /> : <Menu size={50} />}
        </button>

        <img 
          src='./src/assets/logo.png' 
          alt='Logo da empresa' 
          className='w-[12rem] md:w-[11rem] lg:w-[12rem] xl:w-[15rem] object-contain'
        />
        <ShoppingCart 
          size={50} 
          className="text-white"
        />
      </div>

      <nav className={`  absolute left-2 top-48 w-50  z-50 ${menuOpen ? 'block' : 'hidden'} md:static md:flex md:w-auto`}>
        <ul className='flex flex-col gap-[3rem] md:flex-row md:space-x-12 lg:space-x-16 text-5xl p-3 md:text-2xl lg:text-3xl text-white p-4 md:p-0'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>

)}

export default Header