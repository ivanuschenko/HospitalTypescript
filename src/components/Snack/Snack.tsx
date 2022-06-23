import { FC } from 'react';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { Snackbar } from '@mui/material';

const SimpleSnackbar:FC = () => {        
  const { error, openSnack  } = useTypeSelector(state => state.user);
  
  return (
    <div>      
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}        
        open={openSnack}          
        message={error}                 
      />  
    </div>
  );
}
export default SimpleSnackbar;
