import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
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
import { DashRoute } from "./template/Dashboard";
import { PageRoute } from "./template/Page";

const NotFound = (props) => {
  return (
    <div className="bg_primary p-4 md:py-28 h-full md:h-screen">
      <div className="container mx-auto md:px-40">
        <div className="grid md:grid-cols-2 shadow-lg">
          <div className="bg-gray-100">
            <h1 className="text-2xl font-bold px-4 md:px-10 mt-12 mb-10">
              404 PAGE NOT FOUND
            </h1>
            <Link
              className="bg-blue-500 hover:bg-blue-700 ml-10 text-white font-bold py-2 px-4 rounded"
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="bg_primary text-white h-96">
            <img
              src="https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bg "
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <PageRoute path="/" exact component={Home} />
        <PageRoute path="/about" component={About} />
        <PageRoute
          path="/snakes_and_Snakebites"
          exact
          component={SnakesAndSnakebites}
        ></PageRoute>
        <PageRoute
          path="/snakes_and_Snakebites/:id"
          component={SnakebiteDetails}
        ></PageRoute>
        <PageRoute path="/news" exact component={News}></PageRoute>
        <PageRoute path="/news/:id" component={NewsDetails}></PageRoute>
        <PageRoute path="/antivenom" exact component={Antivenom}></PageRoute>
        <PageRoute
          path="/antivenom/:id"
          component={AntivenomDetails}
        ></PageRoute>
        <PageRoute path="/Snakes_art" component={ArtAndCulture}></PageRoute>
        <PageRoute path="/contact" component={Contact}></PageRoute>

        {/* dashboard route  */}
        <Route path="/login" exact component={Login}></Route>
        <DashRoute path="/d_home" exact component={DHome}></DashRoute>
        <DashRoute path="/d_slider" exact component={DSlider} />
        <DashRoute path="/d_news" exact component={DNews} />
        <DashRoute path="/d_snakes_art" component={DSnakeArt}></DashRoute>
        <DashRoute
          path="/d_snakes_and_snakebites"
          component={DSnakebite}
        ></DashRoute>
        <DashRoute path="/d_antivenom" component={DAntivenom}></DashRoute>

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
