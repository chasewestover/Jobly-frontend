import { useState } from "react";
import NavBar from "./NavBar";
import Routes from "./Routes";
import jwt from 'jsonwebtoken';
import { Route, Switch, useHistory } from "react-router";
import "./JoblyApp.css";
import UserContext from "./UserContext";
import EnterPage from "./EnterPage";

function JoblyApp() {
  const history = useHistory();
  const initToken = localStorage.getItem('token');
  const [user, setUser] = useState(initToken ? { token: initToken, ...jwt.decode(initToken) } : null);

  function updateUser(token) {
    setUser({ token, ...jwt.decode(token) });
    history.push('/');
    localStorage.setItem('token', token);
  }

  function removeUser() {
    setUser(null);
    history.push('/');
    localStorage.clear();
  }

  return (
    <div className="JoblyApp">
      <UserContext.Provider value={{ user, removeUser, updateUser }}>
        <Switch>
          <Route path="/enter"><EnterPage /></Route>
          <Route>
            <NavBar />
            <div className="JoblyContent">
              <Routes />
            </div>
          </Route>
        </Switch>
        
      </UserContext.Provider>
    </div>
  );
}
export default JoblyApp;