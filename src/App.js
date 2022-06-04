import logo from "./logo.svg";
import "./App.css";
// import Greet from "./components/Greet";
import {Greet} from "./components/FunctionalComponent";
import Welcome from "./components/ClassComponent";
import Hi from "./components/PropsInFunctionalComponents";
import Howdy from "./components/PropsInClassComponents";
import Message from "./components/State(a)";
import Counter from "./components/State(b)";
import Destructuring from "./components/DestructuringInFunc";
import DestructuringInClass from "./components/DestructuringInClass";
import FunctionClick from "./components/FunctionEventHandling";
import ClassClick from "./components/ClassEventHandling";

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>

      {/* Using Props in Functional Components */}
      <Hi name="Bruce" heroName="Superman">
        <p>This is children props.</p>
        <h6>This is sixth heading.</h6>
      </Hi>
      <Hi name="John" heroname="Batman">
        <button>Click</button>
      </Hi>
      <Hi name="Alice" heroName="Wonder Woman"/>
      <Hi name="Mack" heroName="Superman"/>
      
      {/* Using Props in class based components  */}
      <Howdy name="Raman"/>

      {/* State(b) - Using States in class based components. States are only used in class based components. */}
      <Message/>

      {/* State(b) - States Close look */}
      <Counter/>

      {/* Destructuring - Destructuring in parameter */}
      {/* <Destructuring myName="John" dogName="Bobby" quality="faithful" food="burger"/> */}

      {/* Destructuring - Destructuring in the function body */}
      <Destructuring myName="John" dogName="Bobby" quality="faithful" food="burger"/>

      {/* Destructuring in class components  */}
      <DestructuringInClass myName="John" dogName="Bobby" quality="faithful" food="burger"/>

      {/* Event handling in functional components  */}
      <FunctionClick/>

      {/* Event handling in class components */}
      <ClassClick/>
    </div>
  );
}

export default App;
