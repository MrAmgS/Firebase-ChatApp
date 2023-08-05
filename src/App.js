import {useState , useRef} from 'react'
import './App.css';
import { auth } from './Firebase-Config';

//components
import { Auth } from './Components/Auth';
import { Chat } from './Components/Chat';

//Cookies
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth , setIsAuth] = useState(cookies.get('auth-token'));
  const [room , setRoom] = useState(null);
  
  const roomInputRef = useRef(null);
  
  if(!isAuth){
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div className='container'> 
      { room ? (
        <Chat room={room} />
      ) : (
        <div className='room'>
        <label>Enter Room Name :</label>
        <input ref={roomInputRef} />
        <button onClick={() => setRoom(roomInputRef.current.value)}>
          Enter Chat
        </button>
       
      </div>
      )}
    </div>
    
  )


  


}

export default App;
