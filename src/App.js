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
      <body>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/edit">Edit</Link>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home user={user} />
          </Route>
          <Route path="/edit" exact>
            <Edit user={user} setUser={setUser} />
          </Route>
        </Switch>
      </body>
    </BrowserRouter>
  );
}

function Home({ user }) {
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
