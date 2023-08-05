import { auth, provider } from "../Firebase-Config";
import { signInWithPopup } from "firebase/auth";

//styles
import styles from './Styles/Auth.module.css'

//cookies
import Cookie from "universal-cookie";

//Icon
import googleIcon from '../assets/google.svg';

const cookies = new Cookie();

export const Auth = ({setIsAuth}) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.auth} >
      <p>Sign in with Google to continue</p>
      <div className={styles.signInButton}>
      <img src={googleIcon} />
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
};