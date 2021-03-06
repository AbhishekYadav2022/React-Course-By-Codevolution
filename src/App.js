import logo from "./logo.svg";
import "./App.css";
// import Greet from "./components/Greet";
import {Greet} from "./components/FunctionalComponent";
import Welcome from "./components/ClassComponent";
import Hi from "./components/PropsInFunctionalComponents";
import Howdy from "./components/PropsInClassComponents";
import Message from "./components/StateFirstPart";
import Counter from "./components/StateSecondPart";
import Destructuring from "./components/DestructuringInFunc";
import DestructuringInClass from "./components/DestructuringInClass";
import FunctionClick from "./components/FunctionEventHandling";
import ClassClick from "./components/ClassEventHandling";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/MethodsAsProps/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import Styling from "./components/Styling";
import PureComp from "./components/PureComponent/PureComp";
import ParentComp from "./components/PureComponent/ParentComp";
import HookCounter from "./hook/components/HookCounter";
import HookCounterTwo from "./hook/components/HookCounterTwo";
import HookCounterThree from "./hook/components/HookCounterThree";
import HookCounterFour from "./hook/components/HookCounterFour";
import UseEffectHookCounterOne from "./hook/components/UseEffectHookCounterOne";
import HookMouse from "./hook/components/HookMouse";
import MouseContainer from "./hook/components/MouseContainer";
import IntervalHookCounter from "./hook/components/IntervalHookCounter";
import DataFetching from "./hook/components/DataFetching";

function App() {
  return (
    <div className="App">
      {/* React Hook  */}
      {/* Fetching Data Part1  */}
      <DataFetching/>
      <IntervalHookCounter/>
      <MouseContainer/>
      {/* <HookMouse/> */}
      <UseEffectHookCounterOne/>
      <HookCounterFour/>
      <HookCounterThree/>
      <HookCounterTwo/>
      <HookCounter/>

    
      {/* Pure Component  */}
      {/* <ParentComp/> */}

      {/* Styling  */}
      <Styling/>

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

      {/* Binding events in react  */}
      <EventBind/>

      {/* Methods as props */}
      <ParentComponent/>

      {/* Conditional Rendering */}
      <ConditionalRendering/>

      {/* List Rendering */}
      <hr/>
      <ListRendering/>

      {/* Styling */}
    </div>
  );
}

export default App;
