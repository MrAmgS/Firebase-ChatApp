import {useState} from 'react'
import './App.css';
import { auth } from './Firebase-Config';

//components
import { Auth } from './Components/Auth';

//Cookies
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth , setIsAuth] = useState(cookies.get('auth-token'));
  const [room , setRoom] = useState(null);

  if(!isAuth){
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
}

export default App;
