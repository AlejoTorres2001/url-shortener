import { useContext } from 'react'
import  { AuthContext } from '../context/authContext'
const useAuthContext = () => {
  const {userState, setUserState} = useContext(AuthContext)
  return {userState, setUserState}
}

export default useAuthContext