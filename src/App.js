import { useState, useRef } from "react";
import "./App.css";
import { auth } from "./Firebase-Config";
import { signOut } from "firebase/auth";

//Icon
import signOutLogo from './assets/sign-out.svg';

//components
import { Auth } from "./Components/Auth";
import { Chat } from "./Components/Chat";

//Cookies
import Cookies from "universal-cookie";
const cookies = new Cookies();


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label>Enter Room Name :</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}
      <div className="sign-out">
        <button onClick={signUserOut}> <img src={signOutLogo} /></button>
      </div>
    </div>
  );
}

export default App;
