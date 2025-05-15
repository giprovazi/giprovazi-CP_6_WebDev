import {Link} from 'react-router-dom'
import BarraPesquisa from './BarraPesquisa'
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const Header = () => {
    return (
    <header className='flex '>
      <img src='./src/assets/logo.png' alt='Logo da empresa' className='w-[10rem] md:w-[12rem] lg:w-[13rem] xl:[15rem] object-contain p-4'/>
      <nav className='flex flex-col'>
        <ul className='flex space-x-2 md:space-x-16 lg:space-x-16 text-2xl md:text-5xl lg:text-76xl xl:text-7xl'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <ShoppingCart size={64} className="text-white mt-3"/>
        </ul>
        <BarraPesquisa />
      </nav>
    </header>

    )
}

export default Header