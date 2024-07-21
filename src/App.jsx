import Hero from "./components/home/hero";
import Expenses from "./components/home/expenses";
import Goals from "./components/home/goals";
import Nav from "./components/nav";

import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Expenses />
      <Goals />

      <Nav />
    </>
  );
}

export default App;
