export interface IAppointments {
  _id: string
  complaint: string 
  date: string
  doctor: string
  patient: string
  userID: string  
}
export interface PropsOnlyChild {
  children: React.ReactNode
}

export interface ISetComplaint {
  inputName: string,
  inputDoctor: string,
  inputData: string,
  inputComplaint: string
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;  
}