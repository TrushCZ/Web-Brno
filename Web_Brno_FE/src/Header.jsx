import { Link } from "react-router-dom"

const Header = () => {

return  <header>
            <div className='header__logo'>
                <h1 className='header__logo__word'>BRNOtoday</h1>
                <img className='header__logo__heart' src='../src/img_general/heart.svg' alt=""/>
            </div>
            <nav className='header__navigation'>
                <Link to='/'>AKTUÁLNĚ</Link>
                <Link to='/gastronomie'>GASTRONOMIE</Link>
                <Link to='/volnycas'>VOLNÝ ČAS</Link>
                <Link to='/inspirace'>INSPIRACE</Link>
                <Link to='/sport'>SPORT</Link>
            </nav>
            <div className='header__buttonBox'>
                <a>NAPIŠTE NÁM</a>
                <a>E-SHOP</a>
            </div>
        </header>
}

export default Header

