import {Link} from 'react-router-dom'
import BarraPesquisa from './BarraPesquisa'
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const Header = () => {
    return (
    <header className='flex '>
      <img src='./src/assets/logo.png' alt='Logo da empresa' className='w-[10rem] md:w-[11rem] lg:w-[12rem] xl:[15rem] object-contain p-4'/>
      <nav className='flex flex-col'>
        <div className='flex gap-16'>
          <ul className='flex space-x-2 md:space-x-12 lg:space-x-16 xl:space-x-16 text-2xl md:text-5xl lg:text-6xl xl:text-7xl'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
          <ShoppingCart size={80} className="text-white mt-3  w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-50 xl:h-50"/>
        </div>
        <BarraPesquisa />
      </nav>
    </header>

    )
}

export default Header