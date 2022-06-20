import { PropsOnlyChild } from 'src/types/types';
import Logo from 'src/img/logo.svg';
import './style.scss';

const Header: React.FC<PropsOnlyChild> = ({children}) => {
  return (
    <div className='header-block'>
      <img className='header-img__logo' src={Logo} alt='logo' />
      <div className='header-children'>
        {children}
      </div>        
    </div>
  )
}

export default Header