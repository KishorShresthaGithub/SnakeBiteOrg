import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/utils.scss";
import About from "./pages/About";
import Antivenom from "./pages/Antivenom";
import AntivenomDetails from "./pages/AntivenomDetails";
import ArtAndCulture from "./pages/ArtAndCulture";
import Contact from "./pages/Contact";
import DAntivenom from "./pages/Dashboard/DAntivenom";
import DHome from "./pages/Dashboard/DHome";
import DNews from "./pages/Dashboard/DNews";
import DSlider from "./pages/Dashboard/DSlider";
import DSnakeArt from "./pages/Dashboard/DSnakeArt";
import DSnakebite from "./pages/Dashboard/DSnakebite";
import Login from "./pages/Dashboard/Login";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import SnakebiteDetails from "./pages/SnakebiteDetails";
import SnakesAndSnakebites from "./pages/SnakesAndSnakebites";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route
          path="/snakes_and_Snakebites"
          exact
          component={SnakesAndSnakebites}
        ></Route>
        <Route
          path="/snakes_and_Snakebites/:id"
          component={SnakebiteDetails}
        ></Route>
        <Route path="/news" exact component={News}></Route>
        <Route path="/news/:id" component={NewsDetails}></Route>
        <Route path="/antivenom" exact component={Antivenom}></Route>
        <Route path="/antivenom/:id" component={AntivenomDetails}></Route>
        <Route path="/Snakes_art" component={ArtAndCulture}></Route>
        <Route path="/contact" component={Contact}></Route>

        {/* dashboard route  */}
        <Route path="/admin" exact component={Login}></Route>
        <Route path="/dash/home" exact component={DHome}></Route>
        <Route path="/dash/slider" exact component={DSlider} />
        <Route path="/dash/news" exact component={DNews} />
        <Route path="/dash/Snakes_art" component={DSnakeArt}></Route>
        <Route
          path="/dash/snakes_and_Snakebites"
          component={DSnakebite}
        ></Route>
        <Route path="/dash/antivenom" component={DAntivenom}></Route>
      </Switch>
    </Router>
  );
}

export default App;
