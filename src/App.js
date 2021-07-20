import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/Front/NotFound";
import "@css/utils.scss";
import About from "@pages/About";
import Antivenom from "@pages/Antivenom";
import AntivenomDetails from "@pages/AntivenomDetails";
import ArtAndCulture from "@pages/ArtAndCulture";
import Contact from "@pages/Contact";
import DAntivenom from "@pages/Dashboard/DAntivenom";
import DHome from "@pages/Dashboard/DHome";
import DLinks from "@pages/Dashboard/DLinks";
import DNews from "@pages/Dashboard/DNews";
import DSlider from "@pages/Dashboard/DSlider";
import DSnakeArt from "@pages/Dashboard/DSnakeArt";
import DSnakebite from "@pages/Dashboard/DSnakebite";
import Login from "@pages/Dashboard/Login";
import Home from "@pages/Home";
import News from "@pages/News";
import NewsDetails from "@pages/NewsDetails";
import SnakebiteDetails from "@pages/SnakebiteDetails";
import SnakesAndSnakebites from "@pages/SnakesAndSnakebites";
import { DashRoute } from "@template/Dashboard";
import { PageRoute } from "@template/Page";
import DEvents from "./pages/Dashboard/DEvents";
import DContact from "./pages/Dashboard/DContact";

// const Render = ({ html }) => {
//   return (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: DOMPurify.sanitize(html),
//       }}
//     ></div>
//   );
// };

// const test = [
//   { to: "/test", html: "<h1>This is test</h1>" },
//   { to: "/test1", html: "<h1>This is test 1</h1>" },
//   { to: "/test2", html: "<h1>This is test 2</h1>" },
// ];

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

        {/* test */}

        {/* {test.map((res, index) => (
          <PageRoute
            key={index}
            path={res.to}
            html={res.html}
            component={Render}
          />
        ))} */}

        {/* dashboard route  */}
        <Route path="/login" exact component={Login}></Route>
        <DashRoute path="/d_home" exact component={DHome}></DashRoute>
        <DashRoute path="/d_slider" exact component={DSlider} />
        <DashRoute path="/d_news" exact component={DNews} />
        <DashRoute path="/d_events" exact component={DEvents} />
   
        <DashRoute path="/d_snakes_art" component={DSnakeArt}></DashRoute>
        <DashRoute
          path="/d_snakes_and_snakebites"
          component={DSnakebite}
        ></DashRoute>
        <DashRoute path="/d_antivenom" component={DAntivenom}></DashRoute>
        <DashRoute path="/d_links" component={DLinks}></DashRoute>
        <DashRoute path="/d_contact" component={DContact}></DashRoute>

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
