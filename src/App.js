import "./styles/App.css";
import Layout from "./components/Layout";
import Result from "./components/pages/Result";
import Quiz from "./components/pages/Quiz";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from './contexts/AuthContext'
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/quiz">
              <Quiz/>
            </Route>
            <Route path="/result">
              <Result/>
            </Route>
          </Switch>
        </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
