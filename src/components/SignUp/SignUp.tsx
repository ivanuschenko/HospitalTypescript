import { useState, FC } from 'react';
import { useActions } from 'src/hooks/useAction';
import { Link } from 'react-router-dom';
import Header from 'src/components/Header/Header';
import Main from 'src/components/Main/Main';
import SimpleSnackbar from 'src/components/Snack/Snack';
import { IRegistrate } from 'src/components/SignUp/type';
import BodyImg from 'src/img/hospital.svg';
import './style.scss';

const SignUp: FC = () => {  
  const [newUser, setNewUser] = useState<IRegistrate>({
    name: "",
    password : "",
    confirmPassword: "",
  });
  const { register } = useActions()
  
  const createNewPatient = () : void => {    
    const {
      name,
      password,
      confirmPassword
    } = newUser;
    register(name, password, confirmPassword); 
  }

  const handleChange = (key: string, value: string): void => {
    setNewUser({...newUser, [key]: value});
  }

  return (    
    <div className="signup">
      <Header>
        <div className="signup-header__title">
          <h1>Зарегистрироваться в системе</h1>   
        </div>               
      </Header>
      <Main>
        <img src={BodyImg} alt="hospitalLogo"/>
        <div className="signup-body">
          <h1>Регистрация</h1>
          <form className="signup-form">          
            <div className="signup-block">
              <label htmlFor="signup-block__input-login">Логин:</label>
              <input 
                type="text"
                id="signup-block__input-login"
                className="signup-block__input"                
                placeholder="Введите логин"                         
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="signup-block">
              <label htmlFor="signup-block__input-password">Пароль:</label>
              <input 
                type="password"
                id="signup-block__input-password"
                className="signup-block__input"                
                placeholder="Введите пароль"
                onChange={(e) => handleChange('password', e.target.value)}
              />
            </div>
            <div className="signup-block">
              <label htmlFor="signup-block__input-confirmPassword">Повторите пароль:</label>
              <input
                type="password"
                id="signup-block__input-confirmPassword"
                className="signup-block__input"                
                placeholder="Повторите пароль" 
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
              />              
            </div>
            <div className="signup-block">
              <button type="button" className="signup-block__button-registrate" onClick={createNewPatient}>Зарегистрироваться</button>
              <Link className="signup-block__link-login" to='/signIn'>
                Войти
              </Link> 
            </div>
          </form>
        </div>
      </Main> 
      <SimpleSnackbar />         
    </div>
  )
}

export default SignUp;