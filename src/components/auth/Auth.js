import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase/firebase.config'

function Auth () {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
    }
    
    const logOut = async () => {
        await signOut(auth);
    }
    
    return (
        <div>
            {auth?.currentUser?.displayName}
            <button onClick={logOut}>Salir</button>
            <button onClick={signInWithGoogle}>Ingresar con Google</button>
        </div>
    )
}

export default Auth; 