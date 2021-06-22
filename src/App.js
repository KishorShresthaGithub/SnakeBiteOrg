import './css/utils.scss'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Snakes_and_snakebites from './pages/Snakes_and_snakebites';
import Snakebite_Details from './pages/Snakebite_Details';
import News from './pages/News';
import News_Details from './pages/News_Details';
import Antivenom from './pages/Antivenom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path="/snakes_and_Snakebites" exact component={Snakes_and_snakebites}></Route>
        <Route path="/snakes_and_Snakebites/:id" component={Snakebite_Details}></Route>
        <Route path="/news" exact component={News}></Route>
        <Route path="/news/:id" component={News_Details}></Route>
        <Route path="/antivenom" exact component={Antivenom}></Route>
      </Switch>

    </Router>
    

    
  );
}

export default App;
