import './css/utils.scss'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import SnakesAndSnakebites from './pages/SnakesAndSnakebites';
import SnakebiteDetails from './pages/SnakebiteDetails';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import Antivenom from './pages/Antivenom';
import AntivenomDetails from './pages/AntivenomDetails';
import ArtAndCulture from './pages/ArtAndCulture';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path="/snakes_and_Snakebites" exact component={SnakesAndSnakebites}></Route>
        <Route path="/snakes_and_Snakebites/:id" component={SnakebiteDetails}></Route>
        <Route path="/news" exact component={News}></Route>
        <Route path="/news/:id" component={NewsDetails}></Route>
        <Route path="/antivenom" exact component={Antivenom}></Route>
        <Route path="/antivenom/:id" component={AntivenomDetails}></Route>
        <Route path="/Snakes_art" component={ArtAndCulture}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>

    </Router>
    

    
  );
}

export default App;
