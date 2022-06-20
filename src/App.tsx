import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from 'src/components/SignIn/SingIn'
import SignUp from 'src/components/SignUp/SignUp';
import './app.scss';
import { useTypeSelector } from './hooks/useTypeSelector';
import { useActions } from './hooks/useAction';

const App: any = () => {
  const {isAuth} = useTypeSelector(state => state.user) 
  const {checkauth} = useActions();

  useEffect(() => { 
    checkauth()                
  }, []);
   
  if (!isAuth) {       
    return (
      <Routes>        
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />            
        <Route path='*' element={<Navigate to='/signIn' />} />               
      </Routes>      
    );
  } 
  return (      
    <Routes>      
      <Route path='*' element={<Navigate to='/appointment' />} />
    </Routes>      
  );  
}


export default App;
