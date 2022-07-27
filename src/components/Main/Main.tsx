import { PropsOnlyChild } from 'src/types/types';
import './style.scss'

const Main: React.FC<PropsOnlyChild> = ({children}) => {
  return (
    <div className='main-form'>
      {children}
    </div>
  ); 
};

export default Main;