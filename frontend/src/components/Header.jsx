import {Link} from 'react-router-dom'
import BarraPesquisa from './BarraPesquisa'

const Header = () => {
    return (
    <header className='flex'>
      <nav className='flex space-x-4 '>
        <img src='./src/assets/logo.png' alt='Logo da empresa' className='w-64 md:w-96 lg:w-[20rem] object-contain p-4'/>
        <ul className='flex space-x-10 md:space-x-16 lg:space-x-20 text-3xl md:text-5xl lg:text-7xl'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
      <div className="flex-grow max-w-[600px] ml-8 pl-32">
        <BarraPesquisa />
      </div>
    </header>

    )
}

export default Header