import CounterProvider from "./Context/CounterContext";
import CounterButtons from './Components/CounterButtons';
import CounterDisplay from './Components/CounterDisplay';


const App=()=>{

return(
   <div className="card w-50 mx-auto">
     <CounterProvider>
        <div className="card mx-auto w-50">
          <CounterDisplay/>
          <CounterButtons/>
        </div>
      </CounterProvider>



    </div>






)
}
export default App;