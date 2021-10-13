import "./styles/App.css";
import Layout from "./components/Layout";
import Result from "./components/pages/Result";
import Quiz from "./components/pages/Quiz";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from './components/PublicRoute'



function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>

              <PublicRoute exact path="/signup" component={Signup}/>
                
              <PublicRoute exact path="/login" component={Login}/>
                
              <PrivateRoute exact path="/quiz/:id" component={Quiz}/>
                
              <PrivateRoute exact path="/result/:id" component={Result}/>

            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
