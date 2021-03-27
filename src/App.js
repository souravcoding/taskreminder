import './App.css';
import {context} from './SignUp'
import {Switch,Route} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
 
   
  return (
    <><context.Provider value={JSON.parse(localStorage.getItem('setDetail'))}>

      <Switch>
      <Route exact path="/">
        <SignUp/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/home">
      <Home/>
      </Route>
      </Switch>
      </context.Provider>

    </>
  );
}

export default App;
