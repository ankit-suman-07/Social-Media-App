import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./navbar.css"

export const NavBar = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }

    return (
        <div className="nav">
            <div className="navLeft">
                <Link className="link" to="/" >Home</Link>
                {
                    !user ? (<Link  className="link" to="/login" >Login</Link>) 
                        : (<Link  className="link" to="/createpost" >Create Post</Link>)
                }
            </div>
            
            
            <div className="navRight">
                { user && (
                    <div className="rightSection">
                        <p className="innerRight" >{user?.displayName}</p>
                        
                        <button  className="btn-logout" onClick={signUserOut}>Log Out</button>
                        <img  className="innerRight" src={user?.photoURL || ""}  />
                    </div>
                ) }
                
            </div>
        </div>
    );
}