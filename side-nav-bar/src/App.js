import './App.css';
import SideBar from "./components/Sidebar";
import { SidebarData } from './components/SidebarData';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Badges from "./pages/Badges";
import Projects from "./pages/Projects";
import KeepInTouch from "./pages/KeepInTouch";
import Linkedin from "./pages/Linkedin";

function App() {
  return (
    <Router>
      <div>
        <SidebarData />
        <Route path = "/AboutMe" component={AboutMe} />
      </div>
    </Router>
   
  );
}

export default App;
