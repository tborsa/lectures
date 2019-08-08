const fakeLogin = (email, password, callback) => {
    setTimeout(() => {
      if (email === "1@1" && password === "password") {
        callback(true);
      } else {
        callback(false);
      }
    }, 1000);
  };
  
function App() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loggedin, setLoggedin] = useState(false);
    let [waiting, setWaiting] = useState(false);
    let [error, setError] = useState("");
    const login = event => {
      event.preventDefault();
      setWaiting(true);
      fakeLogin(email, password, success => {
        if (success) {
          setEmail("");
          setPassword("");
          setLoggedin(true);
          setWaiting(false);
          setError("");
        } else {
          setWaiting(false);
          setError("incorrect email or password");
        }
      });
      console.log(email, password);
    };
    return (
      <div className="App">
        {loggedin && (
          <div>
            <h2>You are logged in!</h2>
            <button
              onClick={() => {
                setLoggedin(false);
              }}
            >
              logout
            </button>
          </div>
        )}
        {loggedin || (
          <form onSubmit={login}>
            <p>{error}</p>
            <label>
              email:
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label>
              password:
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <input type="submit" disabled={waiting} value="login" />
          </form>
        )}
      </div>
    );
  }