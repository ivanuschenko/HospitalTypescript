export const validateLogin = /^[0-9A-Za-z]{6,}$/;
export const validatePassword = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;

export const checkValidationLogin = (login:string):boolean => {
  return validateLogin.test(login);  
};

export const checkValidationPassword = (password:string):boolean => {
  return validatePassword.test(password); 
};

