import "./App.css";
import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState({
    name: "Kevin",
    age: 23,
  });

  return (
    <BrowserRouter>
      <div className="container">
        <div className="nav">
          <Link to="/">Profile</Link>
          <Link to="/edit">Edit</Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route path="/edit" exact>
            <Edit user={user} setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Profile({ user, setUser }) {
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
    </div>
  );
}

function Edit({ user, setUser }) {
  return <div>Edit!!!</div>;
}
