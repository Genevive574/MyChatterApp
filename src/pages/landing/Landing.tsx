import { Link, useNavigate } from "react-router-dom";

// styles
import "./Landing.css";

// hooks
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

export default function Landing() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();

  const navigate=useNavigate()


  const handleGetstarted =()=> {
    if (!user) {
      return navigate("/posts")
    } 
  }

  return (
    <div className="landing">
      <nav>
        <div className="logo">
          <i className="fi fi-sr-comment-quote"></i>
          <span>Chatter</span>
        </div>
        <ul>
          <li id="homebtn">
            <Link to="#">Home</Link>
          </li>
          <li id="blogbtn">
            <Link to="/posts">Blogs</Link>
          </li>
        </ul>
        {!user && (
          <div className="btns">
            <Link className="btn btn-login" to="/login">
              Log in
            </Link>
            <Link className="btn" to="/signup">
              Sign up
            </Link>
          </div>
        )}
        {user && (
          <div className="btns">
            {isPending ? (
              <button className="btn" disabled>
                Logging out...
              </button>
            ) : (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        )}
      </nav>

      <section id="hero">
        <div>
          <img src="./img/land.jpg" alt="welcome message" />
          <div id ="welcome">
            <h1>Welcome to chatter App</h1>
            <p>
            Welcome to Chatter App, the ultimate platform for uninhibited self-expression. With no restrictions or limitations, you can connect with like-minded individuals, engage in lively discussions, and share your thoughts, ideas, and emotions without hindrance. Join our vibrant community today, unleash your inner chatterbox, and embark on an exciting journey of self-discovery. Sign up now and let your voice be heard with Chatter App!
            </p>
            <button className="btn" onClick={handleGetstarted}>Get started</button> 
          </div>
        </div>
      </section>
    </div>
  );
}
