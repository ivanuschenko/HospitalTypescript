import { useState, FC } from 'react';
import { useActions } from 'src/hooks/useAction';
import { Link } from 'react-router-dom';
import Header from 'src/components/Header/Header'
import Main from 'src/components/Main/Main';
import SimpleSnackbar from 'src/components/Snack/Snack';
import { ILogin } from 'src/components/SignIn/type';
import BodyImg from 'src/img/hospital.svg';
import './style.scss';

const SignIn: FC = () => {  
  const [newUser, setNewUser] = useState<ILogin> ({
    name: "",
    password : ""    
  }); 
  const { login } = useActions();  
  const authorised = () : void => {        
    const {
      name,
      password      
    } = newUser;  
    login(name, password);    
  };
  
  const handleChange = (key: string, value: string): void => {
    setNewUser({...newUser, [key]: value});
  };

  return (
    <div className="signin">
      <Header>
      <div className="signin-header__title">
        <h1>Войти в систему</h1>
      </div>
      </Header>
      <Main>
        <img src={BodyImg} alt="hospitalLogo" />
        <div className="signin-body">
          <h1>Войти в систему</h1>
          <form className="signin-form">          
            <div className="signin-block">
              <label htmlFor="signin-block__input-name">Логин:</label>
              <input              
                type="text"
                placeholder="Введите логин"                
                className="signin-block__input-name"
                onChange={(e) => handleChange('name', e.target.value)} 
              />       
            </div>
            <div className="signin-block">
              <label htmlFor="signin-block__input-password">Пароль:</label>
              <input
                type="password"                         
                placeholder="введите пароль"                
                className="signin-block__input-password"
                onChange={(e) => handleChange('password', e.target.value)}              
              />         
            </div>
            <div className="signin-block">
              <button type="button" className="signin-block__button-login" onClick={authorised}>Войти</button>
              <Link className="signin-block__link-registrate" to='/signUp'>
                Зарегистрироваться
              </Link>
            </div>
          </form>
        </div>
      </Main>  
      <SimpleSnackbar />
    </div>
  )
}

export default SignIn;