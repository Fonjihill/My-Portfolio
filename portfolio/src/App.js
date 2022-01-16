import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import List from "./components/list/List";
import Contact from "./components/contact/Contact";
//import Toggle from "./components/toggle/Toggle";
//import { useContext } from "react";
//import { ThemeContext } from "./context";

const App = () => {
  //const theme = useContext(ThemeContext);
  //const darkMode = theme.state.darkMode;

  return (
    <div
    /*style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}*/
    >
      <Intro />
      <About />
      <List />
      <Contact />
    </div>
  );
};

export default App;
